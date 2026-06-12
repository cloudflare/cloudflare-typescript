// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { DEX } from 'cloudflare/resources/zero-trust/dex/dex';
import { BaseHTTPTests } from 'cloudflare/resources/zero-trust/dex/http-tests/http-tests';

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
  resources: [BaseHTTPTests],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [DEX],
});

const runTests = (client: PartialCloudflare<{ zeroTrust: { dex: { httpTests: BaseHTTPTests } } }>) => {
  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.dex.httpTests.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
      from: '1689520412000',
      interval: 'minute',
      to: '1689606812000',
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
    const response = await client.zeroTrust.dex.httpTests.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
      from: '1689520412000',
      interval: 'minute',
      to: '1689606812000',
      colo: 'SJC',
      deviceId: ['cb49c27f-7f97-49c5-b6f3-f7c01ead0fd7'],
    });
  });
};
describe('resource httpTests', () => runTests(client));
describe('resource httpTests (tree shakable, base)', () => runTests(partialClient));
describe('resource httpTests (tree shakable, subresource)', () => runTests(parentPartialClient));
