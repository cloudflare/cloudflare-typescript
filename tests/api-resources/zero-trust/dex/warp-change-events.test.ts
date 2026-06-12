// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { DEX } from 'cloudflare/resources/zero-trust/dex/dex';
import { BaseWARPChangeEvents } from 'cloudflare/resources/zero-trust/dex/warp-change-events';

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
  resources: [BaseWARPChangeEvents],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [DEX],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { dex: { warpChangeEvents: BaseWARPChangeEvents } } }>,
) => {
  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.dex.warpChangeEvents.get({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      from: '2023-09-20T17:00:00Z',
      page: 1,
      per_page: 10,
      to: '2023-09-20T17:00:00Z',
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
    const response = await client.zeroTrust.dex.warpChangeEvents.get({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      from: '2023-09-20T17:00:00Z',
      page: 1,
      per_page: 10,
      to: '2023-09-20T17:00:00Z',
      account_name: 'Myorg',
      config_name: 'MASQUE',
      sort_order: 'ASC',
      toggle: 'on',
      type: 'config',
    });
  });
};
describe('resource warpChangeEvents', () => runTests(client));
describe('resource warpChangeEvents (tree shakable, base)', () => runTests(partialClient));
describe('resource warpChangeEvents (tree shakable, subresource)', () => runTests(parentPartialClient));
