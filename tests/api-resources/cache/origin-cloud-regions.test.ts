// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Cache } from 'cloudflare/resources/cache/cache';
import { BaseOriginCloudRegions } from 'cloudflare/resources/cache/origin-cloud-regions';

import Cloudflare from 'cloudflare';
import { createClient, type PartialCloudflare } from 'cloudflare/tree-shakable';

const client = new Cloudflare({
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseOriginCloudRegions],
});

const parentPartialClient = createClient({
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Cache],
});

const runTests = (client: PartialCloudflare<{ cache: { originCloudRegions: BaseOriginCloudRegions } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.cache.originCloudRegions.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      ip: '192.0.2.1',
      region: 'us-east-1',
      vendor: 'aws',
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
    const response = await client.cache.originCloudRegions.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      ip: '192.0.2.1',
      region: 'us-east-1',
      vendor: 'aws',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.cache.originCloudRegions.list({
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

  test('list: required and optional params', async () => {
    const response = await client.cache.originCloudRegions.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.cache.originCloudRegions.delete('192.0.2.1', {
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
    const response = await client.cache.originCloudRegions.delete('192.0.2.1', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('bulkDelete: only required params', async () => {
    const responsePromise = client.cache.originCloudRegions.bulkDelete({
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

  test('bulkDelete: required and optional params', async () => {
    const response = await client.cache.originCloudRegions.bulkDelete({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('bulkEdit: only required params', async () => {
    const responsePromise = client.cache.originCloudRegions.bulkEdit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [
        {
          ip: '192.0.2.1',
          region: 'us-east-1',
          vendor: 'aws',
        },
        {
          ip: '2001:db8::1',
          region: 'us-central1',
          vendor: 'gcp',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkEdit: required and optional params', async () => {
    const response = await client.cache.originCloudRegions.bulkEdit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [
        {
          ip: '192.0.2.1',
          region: 'us-east-1',
          vendor: 'aws',
        },
        {
          ip: '2001:db8::1',
          region: 'us-central1',
          vendor: 'gcp',
        },
      ],
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.cache.originCloudRegions.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      ip: '2001:db8::1',
      region: 'us-central1',
      vendor: 'gcp',
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
    const response = await client.cache.originCloudRegions.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      ip: '2001:db8::1',
      region: 'us-central1',
      vendor: 'gcp',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.cache.originCloudRegions.get('192.0.2.1', {
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
    const response = await client.cache.originCloudRegions.get('192.0.2.1', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('supportedRegions: only required params', async () => {
    const responsePromise = client.cache.originCloudRegions.supportedRegions({
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

  test('supportedRegions: required and optional params', async () => {
    const response = await client.cache.originCloudRegions.supportedRegions({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource originCloudRegions', () => runTests(client));
describe('resource originCloudRegions (tree shakable, base)', () => runTests(partialClient));
describe('resource originCloudRegions (tree shakable, subresource)', () => runTests(parentPartialClient));
