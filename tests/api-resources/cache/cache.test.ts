// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseCache } from 'cloudflare/resources/cache/cache';

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
  resources: [BaseCache],
});

const runTests = (client: PartialCloudflare<{ cache: BaseCache }>) => {
  test('purge: only required params', async () => {
    const responsePromise = client.cache.purge({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('purge: required and optional params', async () => {
    const response = await client.cache.purge({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      tags: ['a-cache-tag', 'another-cache-tag'],
    });
  });

  // HTTP 404 error from prism
  test.skip('purgeEnvironment: only required params', async () => {
    const responsePromise = client.cache.purgeEnvironment('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 404 error from prism
  test.skip('purgeEnvironment: required and optional params', async () => {
    const response = await client.cache.purgeEnvironment('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      tags: ['a-cache-tag', 'another-cache-tag'],
    });
  });
};
describe('resource cache', () => runTests(client));
describe('resource cache (tree shakable, base)', () => runTests(partialClient));
