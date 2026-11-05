// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAudit } from 'cloudflare/resources/billing/spend-policies/audit';
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
  resources: [BaseAudit],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [SpendPolicies],
});

const runTests = (client: PartialCloudflare<{ billing: { spendPolicies: { audit: BaseAudit } } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.billing.spendPolicies.audit.list('6f1c2b8e-3d4a-4f5b-9c6d-7e8f9a0b1c2d', {
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
    const response = await client.billing.spendPolicies.audit.list('6f1c2b8e-3d4a-4f5b-9c6d-7e8f9a0b1c2d', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      limit: 50,
      period: 'current_billing_cycle',
    });
  });
};
describe('resource audit', () => runTests(client));
describe('resource audit (tree shakable, base)', () => runTests(partialClient));
describe('resource audit (tree shakable, subresource)', () => runTests(parentPartialClient));
