// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseResults } from 'cloudflare/resources/cloudforce-one/scans/results';
import { Scans } from 'cloudflare/resources/cloudforce-one/scans/scans';

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
  resources: [BaseResults],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Scans],
});

const runTests = (client: PartialCloudflare<{ cloudforceOne: { scans: { results: BaseResults } } }>) => {
  test('get: only required params', async () => {
    const responsePromise = client.cloudforceOne.scans.results.get('config_id', { account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.cloudforceOne.scans.results.get('config_id', { account_id: 'account_id' });
  });
};
describe('resource results', () => runTests(client));
describe('resource results (tree shakable, base)', () => runTests(partialClient));
describe('resource results (tree shakable, subresource)', () => runTests(parentPartialClient));
