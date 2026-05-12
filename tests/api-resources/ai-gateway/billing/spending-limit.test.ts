// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Billing } from 'cloudflare/resources/ai-gateway/billing/billing';
import { BaseSpendingLimit } from 'cloudflare/resources/ai-gateway/billing/spending-limit';

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
  resources: [BaseSpendingLimit],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Billing],
});

const runTests = (
  client: PartialCloudflare<{ aiGateway: { billing: { spendingLimit: BaseSpendingLimit } } }>,
) => {
  // HTTP 404 error from prism
  test.skip('create: only required params', async () => {
    const responsePromise = client.aiGateway.billing.spendingLimit.create({
      account_id: 'account_id',
      amount: 10000,
      duration: 'monthly',
      strategy: 'fixed',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 404 error from prism
  test.skip('create: required and optional params', async () => {
    const response = await client.aiGateway.billing.spendingLimit.create({
      account_id: 'account_id',
      amount: 10000,
      duration: 'monthly',
      strategy: 'fixed',
    });
  });

  // HTTP 404 error from prism
  test.skip('delete: only required params', async () => {
    const responsePromise = client.aiGateway.billing.spendingLimit.delete({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 404 error from prism
  test.skip('delete: required and optional params', async () => {
    const response = await client.aiGateway.billing.spendingLimit.delete({ account_id: 'account_id' });
  });

  // HTTP 404 error from prism
  test.skip('get: only required params', async () => {
    const responsePromise = client.aiGateway.billing.spendingLimit.get({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 404 error from prism
  test.skip('get: required and optional params', async () => {
    const response = await client.aiGateway.billing.spendingLimit.get({ account_id: 'account_id' });
  });
};
describe('resource spendingLimit', () => runTests(client));
describe('resource spendingLimit (tree shakable, base)', () => runTests(partialClient));
describe('resource spendingLimit (tree shakable, subresource)', () => runTests(parentPartialClient));
