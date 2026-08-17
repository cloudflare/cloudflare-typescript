// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseTransformationsC2paResource } from 'cloudflare/resources/zones/transformations-c2pa';
import { Zones } from 'cloudflare/resources/zones/zones';

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
  resources: [BaseTransformationsC2paResource],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Zones],
});

const runTests = (
  client: PartialCloudflare<{ zones: { transformationsC2pa: BaseTransformationsC2paResource } }>,
) => {
  test('edit: only required params', async () => {
    const responsePromise = client.zones.transformationsC2pa.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      value: 'off',
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
    const response = await client.zones.transformationsC2pa.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      value: 'off',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zones.transformationsC2pa.get({
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
    const response = await client.zones.transformationsC2pa.get({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource transformationsC2pa', () => runTests(client));
describe('resource transformationsC2pa (tree shakable, base)', () => runTests(partialClient));
describe('resource transformationsC2pa (tree shakable, subresource)', () => runTests(parentPartialClient));
