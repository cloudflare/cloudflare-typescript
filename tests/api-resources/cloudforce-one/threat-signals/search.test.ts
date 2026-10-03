// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseSearch } from 'cloudflare/resources/cloudforce-one/threat-signals/search';
import { ThreatSignals } from 'cloudflare/resources/cloudforce-one/threat-signals/threat-signals';

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
  resources: [BaseSearch],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ThreatSignals],
});

const runTests = (
  client: PartialCloudflare<{ cloudforceOne: { threatSignals: { search: BaseSearch } } }>,
) => {
  test('search: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.search.search({
      account_id: 'account_id',
      query: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('search: required and optional params', async () => {
    const response = await client.cloudforceOne.threatSignals.search.search({
      account_id: 'account_id',
      query: 'x',
      feed_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      max_results: '',
    });
  });
};
describe('resource search', () => runTests(client));
describe('resource search (tree shakable, base)', () => runTests(partialClient));
describe('resource search (tree shakable, subresource)', () => runTests(parentPartialClient));
