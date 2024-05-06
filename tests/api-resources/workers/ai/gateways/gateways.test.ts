// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gateways', () => {
  test('create: only required params', async () => {
    const responsePromise = cloudflare.workers.ai.gateways.create('0d37909e38d3e99c29fa2cd343ac421a', {
      cache_invalidate_on_update: true,
      cache_ttl: 0,
      collect_logs: true,
      name: 'string',
      slug: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await cloudflare.workers.ai.gateways.create('0d37909e38d3e99c29fa2cd343ac421a', {
      cache_invalidate_on_update: true,
      cache_ttl: 0,
      collect_logs: true,
      name: 'string',
      slug: 'string',
      rate_limiting_interval: 0,
      rate_limiting_limit: 0,
      rate_limiting_technique: 'string',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = cloudflare.workers.ai.gateways.update(
      '0d37909e38d3e99c29fa2cd343ac421a',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { cache_invalidate_on_update: true, cache_ttl: 0, collect_logs: true, name: 'string', slug: 'string' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await cloudflare.workers.ai.gateways.update(
      '0d37909e38d3e99c29fa2cd343ac421a',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        cache_invalidate_on_update: true,
        cache_ttl: 0,
        collect_logs: true,
        name: 'string',
        slug: 'string',
        rate_limiting_interval: 0,
        rate_limiting_limit: 0,
        rate_limiting_technique: 'string',
      },
    );
  });

  test('list', async () => {
    const responsePromise = cloudflare.workers.ai.gateways.list('0d37909e38d3e99c29fa2cd343ac421a');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.workers.ai.gateways.list('0d37909e38d3e99c29fa2cd343ac421a', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.workers.ai.gateways.list(
        '0d37909e38d3e99c29fa2cd343ac421a',
        { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', order_by: 'string', page: 1, per_page: 5 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = cloudflare.workers.ai.gateways.delete(
      '0d37909e38d3e99c29fa2cd343ac421a',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.workers.ai.gateways.delete(
        '0d37909e38d3e99c29fa2cd343ac421a',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = cloudflare.workers.ai.gateways.get(
      '0d37909e38d3e99c29fa2cd343ac421a',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.workers.ai.gateways.get(
        '0d37909e38d3e99c29fa2cd343ac421a',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
