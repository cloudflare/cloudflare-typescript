// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Cache } from 'cloudflare/resources/cache/cache';
import { BaseSmartTieredCache } from 'cloudflare/resources/cache/smart-tiered-cache';

import Cloudflare from 'cloudflare';
import { createClient, type PartialCloudflare } from 'cloudflare/tree-shakable';

const client = new Cloudflare({
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseSmartTieredCache],
});

const parentPartialClient = createClient({
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Cache],
});

const runTests = (client: PartialCloudflare<{ cache: { smartTieredCache: BaseSmartTieredCache } }>) => {
  test('delete: only required params', async () => {
    const responsePromise = client.cache.smartTieredCache.delete({
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

  test('delete: required and optional params', async () => {
    const response = await client.cache.smartTieredCache.delete({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.cache.smartTieredCache.edit({
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
    const response = await client.cache.smartTieredCache.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      value: 'on',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.cache.smartTieredCache.get({
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

  test('get: required and optional params', async () => {
    const response = await client.cache.smartTieredCache.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
};
describe('resource smartTieredCache', () => runTests(client));
describe('resource smartTieredCache (tree shakable, base)', () => runTests(partialClient));
describe('resource smartTieredCache (tree shakable, subresource)', () => runTests(parentPartialClient));
