import {
  castToError,
  coerceBoolean,
  coerceFloat,
  coerceInteger,
  ensurePresent,
  getHeader,
  getRequiredHeader,
  hasOwn,
  isEmptyObj,
  isHeadersProtocol,
  isObj,
  isRequestOptions,
  maybeCoerceBoolean,
  maybeCoerceFloat,
  maybeCoerceInteger,
  readEnv,
  safeJSON,
  redactSensitiveHeaders,
  toBase64,
} from 'cloudflare/core';
import { CloudflareError } from 'cloudflare/error';
import { Headers } from 'cloudflare/_shims/index';

describe('safeJSON', () => {
  test('parses valid JSON', () => {
    expect(safeJSON('{"a":1,"b":[true,null]}')).toEqual({ a: 1, b: [true, null] });
  });

  test('returns undefined for invalid JSON', () => {
    expect(safeJSON('{not json')).toBeUndefined();
  });

  test('returns undefined for an empty string', () => {
    expect(safeJSON('')).toBeUndefined();
  });
});

describe('castToError', () => {
  test('returns Error instances unchanged', () => {
    const e = new TypeError('boom');
    expect(castToError(e)).toBe(e);
  });

  test('JSON-encodes objects into a new Error', () => {
    const out = castToError({ code: 1, message: 'oops' });
    expect(out).toBeInstanceOf(Error);
    expect(out.message).toBe('{"code":1,"message":"oops"}');
  });

  test('handles unstringifiable objects without throwing', () => {
    const cyclic: any = {};
    cyclic.self = cyclic;
    const out = castToError(cyclic);
    expect(out).toBeInstanceOf(Error);
  });

  test('coerces strings into Error', () => {
    const out = castToError('plain');
    expect(out).toBeInstanceOf(Error);
    expect(out.message).toBe('plain');
  });

  test('handles null and undefined', () => {
    expect(castToError(null)).toBeInstanceOf(Error);
    expect(castToError(undefined)).toBeInstanceOf(Error);
  });
});

describe('ensurePresent', () => {
  test('returns the value when defined', () => {
    expect(ensurePresent(0)).toBe(0);
    expect(ensurePresent('')).toBe('');
    expect(ensurePresent(false)).toBe(false);
  });

  test('throws CloudflareError on null', () => {
    expect(() => ensurePresent(null)).toThrow(CloudflareError);
  });

  test('throws CloudflareError on undefined', () => {
    expect(() => ensurePresent(undefined)).toThrow(CloudflareError);
  });
});

describe('readEnv', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  test('returns trimmed values', () => {
    process.env['MY_TEST_VAR'] = '  hello world  ';
    expect(readEnv('MY_TEST_VAR')).toBe('hello world');
  });

  test('returns undefined for unset variables', () => {
    delete process.env['MY_TEST_VAR'];
    expect(readEnv('MY_TEST_VAR')).toBeUndefined();
  });

  test('returns an empty string when the variable is set but blank', () => {
    process.env['MY_TEST_VAR'] = '   ';
    expect(readEnv('MY_TEST_VAR')).toBe('');
  });
});

describe('coerceInteger', () => {
  test('rounds floating point numbers', () => {
    expect(coerceInteger(3.7)).toBe(4);
    expect(coerceInteger(3.2)).toBe(3);
  });

  test('parses integer strings', () => {
    expect(coerceInteger('42')).toBe(42);
    expect(coerceInteger('-7')).toBe(-7);
  });

  test('truncates fractional strings (parseInt behaviour)', () => {
    expect(coerceInteger('3.9')).toBe(3);
  });

  test('throws on unsupported types', () => {
    expect(() => coerceInteger(null)).toThrow(CloudflareError);
    expect(() => coerceInteger(undefined)).toThrow(CloudflareError);
    expect(() => coerceInteger({})).toThrow(CloudflareError);
    expect(() => coerceInteger(true as any)).toThrow(CloudflareError);
  });
});

describe('coerceFloat', () => {
  test('returns numbers unchanged', () => {
    expect(coerceFloat(1.5)).toBe(1.5);
    expect(coerceFloat(0)).toBe(0);
  });

  test('parses numeric strings', () => {
    expect(coerceFloat('1.5')).toBe(1.5);
    expect(coerceFloat('-3.14')).toBe(-3.14);
  });

  test('returns NaN for non-numeric strings (parseFloat behaviour)', () => {
    expect(coerceFloat('abc')).toBeNaN();
  });

  test('throws on unsupported types', () => {
    expect(() => coerceFloat(null)).toThrow(CloudflareError);
    expect(() => coerceFloat({})).toThrow(CloudflareError);
  });
});

describe('coerceBoolean', () => {
  test('returns booleans unchanged', () => {
    expect(coerceBoolean(true)).toBe(true);
    expect(coerceBoolean(false)).toBe(false);
  });

  test('only the literal string "true" maps to true', () => {
    expect(coerceBoolean('true')).toBe(true);
    expect(coerceBoolean('false')).toBe(false);
    expect(coerceBoolean('1')).toBe(false);
    expect(coerceBoolean('TRUE')).toBe(false);
  });

  test('falls back to Boolean() for other types', () => {
    expect(coerceBoolean(1)).toBe(true);
    expect(coerceBoolean(0)).toBe(false);
    expect(coerceBoolean(null)).toBe(false);
    expect(coerceBoolean({})).toBe(true);
  });
});

describe('maybeCoerce* helpers', () => {
  test('return undefined for null and undefined', () => {
    expect(maybeCoerceInteger(null)).toBeUndefined();
    expect(maybeCoerceInteger(undefined)).toBeUndefined();
    expect(maybeCoerceFloat(null)).toBeUndefined();
    expect(maybeCoerceFloat(undefined)).toBeUndefined();
    expect(maybeCoerceBoolean(null)).toBeUndefined();
    expect(maybeCoerceBoolean(undefined)).toBeUndefined();
  });

  test('delegate to the strict coercers for defined values', () => {
    expect(maybeCoerceInteger('5')).toBe(5);
    expect(maybeCoerceFloat('5.5')).toBe(5.5);
    expect(maybeCoerceBoolean('true')).toBe(true);
    expect(maybeCoerceBoolean(0)).toBe(false);
  });
});

describe('isEmptyObj', () => {
  test('treats null and undefined as empty', () => {
    expect(isEmptyObj(null)).toBe(true);
    expect(isEmptyObj(undefined)).toBe(true);
  });

  test('returns true for an empty object', () => {
    expect(isEmptyObj({})).toBe(true);
  });

  test('returns false when any enumerable property exists', () => {
    expect(isEmptyObj({ a: 1 })).toBe(false);
    expect(isEmptyObj({ a: undefined })).toBe(false);
  });
});

describe('hasOwn', () => {
  test('detects own properties', () => {
    expect(hasOwn({ foo: 1 }, 'foo')).toBe(true);
  });

  test('does not report inherited properties', () => {
    expect(hasOwn({}, 'toString')).toBe(false);
  });

  test('handles objects with a null prototype', () => {
    const obj = Object.create(null);
    obj.bar = 1;
    expect(hasOwn(obj, 'bar')).toBe(true);
    expect(hasOwn(obj, 'baz')).toBe(false);
  });
});

describe('isObj', () => {
  test('returns true for plain objects', () => {
    expect(isObj({})).toBe(true);
    expect(isObj({ a: 1 })).toBe(true);
  });

  test('returns false for arrays, primitives, and null', () => {
    expect(isObj([])).toBe(false);
    expect(isObj(null)).toBe(false);
    expect(isObj(undefined)).toBe(false);
    expect(isObj('string')).toBe(false);
    expect(isObj(42)).toBe(false);
  });
});

describe('isRequestOptions', () => {
  test('accepts known request option shapes', () => {
    expect(isRequestOptions({ path: '/foo', method: 'get' })).toBe(true);
    expect(isRequestOptions({ headers: {}, query: { a: 1 }, timeout: 1000 })).toBe(true);
  });

  test('rejects empty objects', () => {
    expect(isRequestOptions({})).toBe(false);
  });

  test('rejects non-objects and null', () => {
    expect(isRequestOptions(null)).toBe(false);
    expect(isRequestOptions(undefined)).toBe(false);
    expect(isRequestOptions('foo')).toBe(false);
    expect(isRequestOptions(7)).toBe(false);
  });

  test('rejects objects with unrecognised keys', () => {
    expect(isRequestOptions({ foo: 1 })).toBe(false);
    expect(isRequestOptions({ path: '/foo', notARealKey: true })).toBe(false);
  });
});

describe('isHeadersProtocol', () => {
  test('detects objects with a get function', () => {
    expect(isHeadersProtocol(new Headers())).toBe(true);
    expect(isHeadersProtocol({ get: () => 'value' })).toBe(true);
  });

  test('returns false for plain Records', () => {
    expect(isHeadersProtocol({})).toBe(false);
    expect(isHeadersProtocol({ 'content-type': 'application/json' })).toBe(false);
    expect(isHeadersProtocol(null)).toBe(false);
  });
});

describe('getHeader', () => {
  test('reads from a HeadersProtocol case-insensitively', () => {
    const h = new Headers({ 'X-Custom': 'value' });
    expect(getHeader(h, 'x-custom')).toBe('value');
    expect(getHeader(h, 'X-CUSTOM')).toBe('value');
    expect(getHeader(h, 'X-Custom')).toBe('value');
  });

  test('reads from a plain Record case-insensitively', () => {
    expect(getHeader({ 'content-type': 'application/json' }, 'Content-Type')).toBe('application/json');
  });

  test('returns the first entry for array-valued headers', () => {
    const original = console.warn;
    console.warn = jest.fn();
    try {
      expect(getHeader({ 'x-foo': ['a', 'b'] }, 'x-foo')).toBe('a');
      expect(console.warn).toHaveBeenCalledTimes(1);
    } finally {
      console.warn = original;
    }
  });

  test('returns undefined when missing', () => {
    expect(getHeader({}, 'X-Missing')).toBeUndefined();
  });
});

describe('getRequiredHeader', () => {
  test('returns the value when present', () => {
    expect(getRequiredHeader({ 'x-foo': 'bar' }, 'X-Foo')).toBe('bar');
  });

  test('throws when the header is missing', () => {
    expect(() => getRequiredHeader({}, 'X-Missing')).toThrow(/Could not find X-Missing header/);
  });
});

describe('toBase64', () => {
  test('encodes ASCII strings', () => {
    expect(toBase64('hello')).toBe('aGVsbG8=');
  });

  test('round-trips via Buffer', () => {
    const decoded = Buffer.from(toBase64('Cloudflare!'), 'base64').toString();
    expect(decoded).toBe('Cloudflare!');
  });

  test('returns an empty string for empty/nullish input', () => {
    expect(toBase64('')).toBe('');
    expect(toBase64(null)).toBe('');
    expect(toBase64(undefined)).toBe('');
  });

  test('handles multi-byte characters', () => {
    expect(toBase64('héllo')).toBe(Buffer.from('héllo').toString('base64'));
  });
});

describe('redactSensitiveHeaders', () => {
  test('redacts the canonical credential-bearing headers', () => {
    const redacted = redactSensitiveHeaders({
      Authorization: 'Bearer secret',
      'X-Auth-Key': 'apikey',
      'X-Auth-Email': 'user@example.com',
      'X-Auth-User-Service-Key': 'svc',
      Cookie: 'session=abc',
      'content-type': 'application/json',
      'user-agent': 'cloudflare-ts/1.0',
    }) as Record<string, unknown>;

    expect(redacted['Authorization']).toBe('[REDACTED]');
    expect(redacted['X-Auth-Key']).toBe('[REDACTED]');
    expect(redacted['X-Auth-Email']).toBe('[REDACTED]');
    expect(redacted['X-Auth-User-Service-Key']).toBe('[REDACTED]');
    expect(redacted['Cookie']).toBe('[REDACTED]');
    expect(redacted['content-type']).toBe('application/json');
    expect(redacted['user-agent']).toBe('cloudflare-ts/1.0');
  });

  test('is case-insensitive on header names', () => {
    const redacted = redactSensitiveHeaders({
      AUTHORIZATION: 'Bearer s',
      'x-AUTH-key': 'k',
    }) as Record<string, unknown>;
    expect(redacted['AUTHORIZATION']).toBe('[REDACTED]');
    expect(redacted['x-AUTH-key']).toBe('[REDACTED]');
  });

  test('redacts entries on a Headers-like instance', () => {
    const headers = new Headers({ Authorization: 'Bearer s', Accept: 'application/json' });
    const redacted = redactSensitiveHeaders(headers) as Record<string, unknown>;
    // Headers normalizes to lowercase
    expect(redacted['authorization']).toBe('[REDACTED]');
    expect(redacted['accept']).toBe('application/json');
  });

  test('passes through nullish and non-object input unchanged', () => {
    expect(redactSensitiveHeaders(null)).toBeNull();
    expect(redactSensitiveHeaders(undefined)).toBeUndefined();
    expect(redactSensitiveHeaders('not-an-object')).toBe('not-an-object');
    expect(redactSensitiveHeaders(42)).toBe(42);
  });

  test('returns a fresh object — does not mutate input', () => {
    const input = { Authorization: 'Bearer s', Accept: 'json' };
    const redacted = redactSensitiveHeaders(input) as Record<string, unknown>;
    expect(redacted).not.toBe(input);
    expect(input['Authorization']).toBe('Bearer s');
  });
});
