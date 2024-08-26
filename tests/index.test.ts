// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { APIUserAbortError } from 'cloudflare';
import { Headers } from 'cloudflare/core';
import defaultFetch, { Response, type RequestInit, type RequestInfo } from 'node-fetch'

describe('instantiate client', () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };

    console.warn = jest.fn();
  });

  afterEach(() => {
    process.env = env;
  });

  describe('defaultHeaders', () => {
    const client = new Cloudflare({ baseURL: 'http://localhost:5000/', defaultHeaders: { 'X-My-Default-Header': '2' }, apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com' })

    test('they are used in the request', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post' });
      expect((req.headers as Headers)['x-my-default-header']).toEqual('2');
    });

    test('can ignore `undefined` and leave the default', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': undefined },
      });
      expect((req.headers as Headers)['x-my-default-header']).toEqual('2');
    });

    test('can be removed with `null`', () => {
      const { req } = client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': null },
      });
      expect(req.headers as Headers).not.toHaveProperty('x-my-default-header');
    });
  });

  describe('defaultQuery', () => {
    test('with null query params given', () => {
      const client = new Cloudflare({ baseURL: 'http://localhost:5000/', defaultQuery: { apiVersion: 'foo' }, apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com' });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo');
    });

    test('multiple default query params', () => {
      const client = new Cloudflare({ baseURL: 'http://localhost:5000/', defaultQuery: { apiVersion: 'foo', hello: 'world' }, apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com' });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo&hello=world');
    });

    test('overriding with `undefined`', () => {
      const client = new Cloudflare({ baseURL: 'http://localhost:5000/', defaultQuery: { hello: 'world' }, apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com' })
      expect(client.buildURL('/foo', { hello: undefined })).toEqual('http://localhost:5000/foo');
    });
  });

  test('custom fetch', async () => {
    const client = new Cloudflare({ baseURL: 'http://localhost:5000/', apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', fetch: (url) => {
  return Promise.resolve(
    new Response(JSON.stringify({ url, custom: true }), {
      headers: { 'Content-Type': 'application/json' },
    }),
  );
} });

    const response = await client.get('/foo');
    expect(response).toEqual({ url: 'http://localhost:5000/foo', custom: true });
  });

  test('custom signal', async () => {
    const client = new Cloudflare({ baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010', apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', fetch: (...args) => {
  return new Promise((resolve, reject) =>
    setTimeout(
      () =>
        defaultFetch(...args)
          .then(resolve)
          .catch(reject),
      300,
    ),
  );
} });

    const controller = new AbortController();
    setTimeout(() => controller.abort(), 200);

    const spy = jest.spyOn(client, 'request');

    await expect(client.get('/foo', { signal: controller.signal })).rejects.toThrowError(
      APIUserAbortError,
    );
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('baseUrl', () => {
    test('trailing slash', () => {
      const client = new Cloudflare({ baseURL: 'http://localhost:5000/custom/path/', apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com' });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    test('no trailing slash', () => {
      const client = new Cloudflare({ baseURL: 'http://localhost:5000/custom/path', apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com' });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    afterEach(() => {
      process.env['CLOUDFLARE_BASE_URL'] = undefined;
    });

    test('explicit option', () => {
      const client = new Cloudflare({ baseURL: 'https://example.com', apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com' });
      expect(client.baseURL).toEqual('https://example.com');
    });

    test('env variable', () => {
      process.env['CLOUDFLARE_BASE_URL'] = 'https://example.com/from_env';
      const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com' });
      expect(client.baseURL).toEqual('https://example.com/from_env');
    });

    test('empty env variable', () => {
      process.env['CLOUDFLARE_BASE_URL'] = ''; // empty
      const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com' });
      expect(client.baseURL).toEqual('https://api.cloudflare.com/client/v4')
    });

    test('blank env variable', () => {
      process.env['CLOUDFLARE_BASE_URL'] = '  '; // blank
      const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com' });
      expect(client.baseURL).toEqual('https://api.cloudflare.com/client/v4')
    });

  });

  test('maxRetries option is correctly set', () => {
    const client = new Cloudflare({ maxRetries: 4, apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com' });
    expect(client.maxRetries).toEqual(4);

    // default
    const client2 = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com' });
    expect(client2.maxRetries).toEqual(2);
  });

  test('with environment variable arguments', () => {
    // set options via env var
    process.env['CLOUDFLARE_API_KEY'] = '144c9defac04969c7bfad8efaa8ea194';
    process.env['CLOUDFLARE_EMAIL'] = 'user@example.com';
    const client = new Cloudflare();
    expect(client.apiKey).toBe('144c9defac04969c7bfad8efaa8ea194');
    expect(client.apiEmail).toBe('user@example.com');
  });

  test('with overriden environment variable arguments', () => {
    // set options via env var
    process.env['CLOUDFLARE_API_KEY'] = 'another 144c9defac04969c7bfad8efaa8ea194';
    process.env['CLOUDFLARE_EMAIL'] = 'another user@example.com';
    const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com' });
    expect(client.apiKey).toBe('144c9defac04969c7bfad8efaa8ea194');
    expect(client.apiEmail).toBe('user@example.com');
  });
});

describe('request building', () => {
  const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com' });

  describe('Content-Length', () => {
    test('handles multi-byte characters', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post', body: { value: '—' } });
      expect((req.headers as Record<string, string>)['content-length']).toEqual('20');
    });

    test('handles standard characters', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post', body: { value: 'hello' } });
      expect((req.headers as Record<string, string>)['content-length']).toEqual('22');
    });
  });

  describe('custom headers', () => {
    test('handles undefined', () => {
      const { req } = client.buildRequest({ path: '/foo', method: 'post', body: { value: 'hello' }, headers: { 'X-Foo': 'baz', 'x-foo': 'bar', 'x-Foo': undefined, 'x-baz': 'bam', 'X-Baz': null } });
      expect((req.headers as Record<string, string>)['x-foo']).toEqual('bar');
      expect((req.headers as Record<string, string>)['x-Foo']).toEqual(undefined);
      expect((req.headers as Record<string, string>)['X-Foo']).toEqual(undefined);
      expect((req.headers as Record<string, string>)['x-baz']).toEqual(undefined);
    });
  })
});

describe('retries', () => {
  test('retry on timeout', async () => {
    let count = 0;
    const testFetch = async (url: RequestInfo, { signal }: RequestInit = {}): Promise<Response> => {
      if (count++ === 0) {
        return new Promise((resolve, reject) =>
          signal?.addEventListener('abort', () => reject(new Error('timed out'))),
        );
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', timeout: 10, fetch: testFetch });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });

  test('retry on 429 with retry-after', async () => {
    let count = 0;
    const testFetch = async (url: RequestInfo, { signal }: RequestInit = {}): Promise<Response> => {
      if (count++ === 0) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', fetch: testFetch });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });

  test('retry on 429 with retry-after-ms', async () => {
    let count = 0;
    const testFetch = async (url: RequestInfo, { signal }: RequestInit = {}): Promise<Response> => {
      if (count++ === 0) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After-Ms': '10',
          },
        });
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', fetch: testFetch });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });
});
