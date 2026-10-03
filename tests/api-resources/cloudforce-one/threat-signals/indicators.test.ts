// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseIndicators } from 'cloudflare/resources/cloudforce-one/threat-signals/indicators';
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
  resources: [BaseIndicators],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ThreatSignals],
});

const runTests = (
  client: PartialCloudflare<{ cloudforceOne: { threatSignals: { indicators: BaseIndicators } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.cloudforceOne.threatSignals.indicators.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.cloudforceOne.threatSignals.indicators.list({
      account_id: 'account_id',
      article_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      cursor: 'x',
      feed_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      include_total: true,
      per_page: 1,
      search: 'search',
      sort: 'sort',
    });
  });
};
describe('resource indicators', () => runTests(client));
describe('resource indicators (tree shakable, base)', () => runTests(partialClient));
describe('resource indicators (tree shakable, subresource)', () => runTests(parentPartialClient));
