// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AIGateway } from 'cloudflare/resources/ai-gateway/ai-gateway';
import { BaseBilling } from 'cloudflare/resources/ai-gateway/billing/billing';

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
  resources: [BaseBilling],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [AIGateway],
});

const runTests = (client: PartialCloudflare<{ aiGateway: { billing: BaseBilling } }>) => {
  // HTTP 404 error from prism -- route not in spec
  test.skip('creditBalance: only required params', async () => {
    const responsePromise = client.aiGateway.billing.creditBalance({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 404 error from prism -- route not in spec
  test.skip('creditBalance: required and optional params', async () => {
    const response = await client.aiGateway.billing.creditBalance({ account_id: 'account_id' });
  });

  test('invoiceHistory: only required params', async () => {
    const responsePromise = client.aiGateway.billing.invoiceHistory({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('invoiceHistory: required and optional params', async () => {
    const response = await client.aiGateway.billing.invoiceHistory({ account_id: 'account_id', type: 'all' });
  });

  test('invoicePreview: only required params', async () => {
    const responsePromise = client.aiGateway.billing.invoicePreview({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('invoicePreview: required and optional params', async () => {
    const response = await client.aiGateway.billing.invoicePreview({ account_id: 'account_id' });
  });

  test('usageHistory: only required params', async () => {
    const responsePromise = client.aiGateway.billing.usageHistory({
      account_id: 'account_id',
      value_grouping_window: 'day',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('usageHistory: required and optional params', async () => {
    const response = await client.aiGateway.billing.usageHistory({
      account_id: 'account_id',
      value_grouping_window: 'day',
      end_time: 1700086400,
      start_time: 1700000000,
    });
  });
};
describe('resource billing', () => runTests(client));
describe('resource billing (tree shakable, base)', () => runTests(partialClient));
describe('resource billing (tree shakable, subresource)', () => runTests(parentPartialClient));
