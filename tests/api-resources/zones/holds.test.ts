// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseHolds } from 'cloudflare/resources/zones/holds';
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
  resources: [BaseHolds],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Zones],
});

const runTests = (client: PartialCloudflare<{ zones: { holds: BaseHolds } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.zones.holds.create({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.zones.holds.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      include_subdomains: true,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zones.holds.delete({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.zones.holds.delete({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      hold_after: 'hold_after',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.zones.holds.edit({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.zones.holds.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      hold_after: '2023-01-31T15:56:36+00:00',
      include_subdomains: true,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zones.holds.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zones.holds.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
};
describe('resource holds', () => runTests(client));
describe('resource holds (tree shakable, base)', () => runTests(partialClient));
describe('resource holds (tree shakable, subresource)', () => runTests(parentPartialClient));
