// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseActivity } from 'cloudflare/resources/billing/spend-policies/activity';
import { SpendPolicies } from 'cloudflare/resources/billing/spend-policies/spend-policies';

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
  resources: [BaseActivity],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [SpendPolicies],
});

const runTests = (client: PartialCloudflare<{ billing: { spendPolicies: { activity: BaseActivity } } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.billing.spendPolicies.activity.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.billing.spendPolicies.activity.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      cursor: 'cursor',
      limit: 50,
      period: 'current_billing_cycle',
    });
  });
};
describe('resource activity', () => runTests(client));
describe('resource activity (tree shakable, base)', () => runTests(partialClient));
describe('resource activity (tree shakable, subresource)', () => runTests(parentPartialClient));
