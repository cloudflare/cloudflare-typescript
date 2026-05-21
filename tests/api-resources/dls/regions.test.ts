// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { DLS } from 'cloudflare/resources/dls/dls';
import { BaseRegions } from 'cloudflare/resources/dls/regions';

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
  resources: [BaseRegions],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [DLS],
});

const runTests = (client: PartialCloudflare<{ dls: { regions: BaseRegions } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.dls.regions.list({ account_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.dls.regions.list({
      account_id: 0,
      cursor: 'cursor',
      per_page: 1,
      type: 'managed',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.dls.regions.get('a1b2c3d4-e5f6-7890-abcd-ef1234567890', { account_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.dls.regions.get('a1b2c3d4-e5f6-7890-abcd-ef1234567890', { account_id: 0 });
  });
};
describe('resource regions', () => runTests(client));
describe('resource regions (tree shakable, base)', () => runTests(partialClient));
describe('resource regions (tree shakable, subresource)', () => runTests(parentPartialClient));
