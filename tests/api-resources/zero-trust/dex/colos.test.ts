// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseColos } from 'cloudflare/resources/zero-trust/dex/colos';
import { DEX } from 'cloudflare/resources/zero-trust/dex/dex';

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
  resources: [BaseColos],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [DEX],
});

const runTests = (client: PartialCloudflare<{ zeroTrust: { dex: { colos: BaseColos } } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.dex.colos.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      from: '2023-08-20T20:45:00Z',
      to: '2023-08-24T20:45:00Z',
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
    const response = await client.zeroTrust.dex.colos.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      from: '2023-08-20T20:45:00Z',
      to: '2023-08-24T20:45:00Z',
      sortBy: 'fleet-status-usage',
    });
  });
};
describe('resource colos', () => runTests(client));
describe('resource colos (tree shakable, base)', () => runTests(partialClient));
describe('resource colos (tree shakable, subresource)', () => runTests(parentPartialClient));
