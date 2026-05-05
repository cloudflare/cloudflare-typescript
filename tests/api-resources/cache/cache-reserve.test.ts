// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Cache } from 'cloudflare/resources/cache/cache';
import { BaseCacheReserveResource } from 'cloudflare/resources/cache/cache-reserve';

import Cloudflare from 'cloudflare';
import { createClient, type PartialCloudflare } from 'cloudflare/tree-shakable';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseCacheReserveResource],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Cache],
});

const runTests = (client: PartialCloudflare<{ cache: { cacheReserve: BaseCacheReserveResource } }>) => {
  test('clear: only required params', async () => {
    const responsePromise = client.cache.cacheReserve.clear({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {},
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('clear: required and optional params', async () => {
    const response = await client.cache.cacheReserve.clear({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: {},
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.cache.cacheReserve.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      value: 'on',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.cache.cacheReserve.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      value: 'on',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.cache.cacheReserve.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.cache.cacheReserve.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('status: only required params', async () => {
    const responsePromise = client.cache.cacheReserve.status({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('status: required and optional params', async () => {
    const response = await client.cache.cacheReserve.status({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
};
describe('resource cacheReserve', () => runTests(client));
describe('resource cacheReserve (tree shakable, base)', () => runTests(partialClient));
describe('resource cacheReserve (tree shakable, subresource)', () => runTests(parentPartialClient));
