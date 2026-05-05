// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Argo } from 'cloudflare/resources/argo/argo';
import { BaseTieredCaching } from 'cloudflare/resources/argo/tiered-caching';

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
  resources: [BaseTieredCaching],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Argo],
});

const runTests = (client: PartialCloudflare<{ argo: { tieredCaching: BaseTieredCaching } }>) => {
  test('edit: only required params', async () => {
    const responsePromise = client.argo.tieredCaching.edit({
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
    const response = await client.argo.tieredCaching.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      value: 'on',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.argo.tieredCaching.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.argo.tieredCaching.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
};
describe('resource tieredCaching', () => runTests(client));
describe('resource tieredCaching (tree shakable, base)', () => runTests(partialClient));
describe('resource tieredCaching (tree shakable, subresource)', () => runTests(parentPartialClient));
