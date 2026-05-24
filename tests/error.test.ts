import {
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  AuthenticationError,
  BadRequestError,
  CloudflareError,
  ConflictError,
  InternalServerError,
  NotFoundError,
  PermissionDeniedError,
  RateLimitError,
  UnprocessableEntityError,
} from 'cloudflare/error';
import { Headers } from 'cloudflare/_shims/index';

const headers = new Headers({ 'request-id': 'abc-123' });

describe('APIError.generate', () => {
  test('returns APIConnectionError when status is missing', () => {
    const err = APIError.generate(undefined, { boom: true }, 'connect failed', undefined);
    expect(err).toBeInstanceOf(APIConnectionError);
    expect(err.message).toBe('connect failed');
  });

  test('returns APIConnectionError when headers are missing', () => {
    const err = APIError.generate(500, { boom: true }, 'no headers', undefined);
    expect(err).toBeInstanceOf(APIConnectionError);
  });

  test('preserves the underlying error as `cause` on connection errors', () => {
    const cause = new Error('socket hang up');
    const err = APIError.generate(undefined, cause, undefined, undefined);
    expect(err).toBeInstanceOf(APIConnectionError);
    // 'cause' is set via @ts-ignore in the implementation
    expect((err as Error & { cause?: Error }).cause).toBe(cause);
  });

  const cases: Array<[number, new (...args: any[]) => APIError]> = [
    [400, BadRequestError],
    [401, AuthenticationError],
    [403, PermissionDeniedError],
    [404, NotFoundError],
    [409, ConflictError],
    [422, UnprocessableEntityError],
    [429, RateLimitError],
    [500, InternalServerError],
    [502, InternalServerError],
    [503, InternalServerError],
    [504, InternalServerError],
  ];

  test.each(cases)('maps status %i to the correct subclass', (status, ctor) => {
    const err = APIError.generate(status, { message: 'boom' }, undefined, headers);
    expect(err).toBeInstanceOf(ctor);
    expect(err).toBeInstanceOf(APIError);
    expect(err).toBeInstanceOf(CloudflareError);
    expect(err.status).toBe(status);
    expect(err.headers).toBe(headers);
  });

  test('falls back to plain APIError for unmapped statuses', () => {
    const err = APIError.generate(418, { message: 'teapot' }, undefined, headers);
    expect(err).toBeInstanceOf(APIError);
    expect(err).not.toBeInstanceOf(BadRequestError);
    expect(err).not.toBeInstanceOf(InternalServerError);
    expect(err.status).toBe(418);
  });
});

describe('APIError message formatting', () => {
  test('includes the status code and string message from the body', () => {
    const err = APIError.generate(400, { message: 'invalid name' }, undefined, headers);
    expect(err.message).toBe('400 invalid name');
  });

  test('JSON-encodes a non-string message', () => {
    const err = APIError.generate(400, { message: { code: 1, text: 'bad' } }, undefined, headers);
    expect(err.message).toBe('400 {"code":1,"text":"bad"}');
  });

  test('JSON-encodes the entire body when it has no message field', () => {
    const err = APIError.generate(400, { errors: [{ code: 7 }] }, undefined, headers);
    expect(err.message).toBe('400 {"errors":[{"code":7}]}');
  });

  test('uses the supplied fallback message when there is no body', () => {
    const err = APIError.generate(500, undefined, 'fallback msg', headers);
    expect(err.message).toBe('500 fallback msg');
  });

  test('reports an empty-body message when status is set but body and message are missing', () => {
    const err = APIError.generate(500, undefined, undefined, headers);
    expect(err.message).toBe('500 status code (no body)');
  });

  test('reports a generic message when nothing is available', () => {
    const err = new APIError(undefined, undefined, undefined, undefined);
    expect(err.message).toBe('(no status code or body)');
  });
});

describe('APIError.errors extraction', () => {
  test('exposes the errors array from the response body', () => {
    const body = { errors: [{ code: 1000, message: 'x' }] };
    const err = APIError.generate(400, body, undefined, headers);
    expect(err.errors).toEqual([{ code: 1000, message: 'x' }]);
  });

  test('defaults to an empty array when the body has no errors field', () => {
    const err = APIError.generate(400, { message: 'oops' }, undefined, headers);
    expect(err.errors).toEqual([]);
  });

  test('defaults to an empty array when the body is undefined', () => {
    const err = APIError.generate(500, undefined, 'boom', headers);
    expect(err.errors).toEqual([]);
  });
});

describe('connection error subclasses', () => {
  test('APIConnectionError defaults to "Connection error."', () => {
    const err = new APIConnectionError({});
    expect(err.message).toBe('Connection error.');
    expect(err.status).toBeUndefined();
    expect(err.headers).toBeUndefined();
  });

  test('APIConnectionTimeoutError defaults to "Request timed out."', () => {
    const err = new APIConnectionTimeoutError();
    expect(err).toBeInstanceOf(APIConnectionError);
    expect(err.message).toBe('Request timed out.');
  });

  test('APIUserAbortError defaults to "Request was aborted."', () => {
    const err = new APIUserAbortError();
    expect(err).toBeInstanceOf(APIError);
    expect(err.message).toBe('Request was aborted.');
    expect(err.status).toBeUndefined();
  });

  test('custom messages override the defaults', () => {
    expect(new APIConnectionError({ message: 'oops' }).message).toBe('oops');
    expect(new APIConnectionTimeoutError({ message: 'slow' }).message).toBe('slow');
    expect(new APIUserAbortError({ message: 'cancelled' }).message).toBe('cancelled');
  });
});
