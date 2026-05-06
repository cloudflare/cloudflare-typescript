// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Billing } from 'cloudflare/resources/ai-gateway/billing/billing';
import { BaseTopup } from 'cloudflare/resources/ai-gateway/billing/topup/topup';

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
  resources: [BaseTopup],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Billing],
});

const runTests = (client: PartialCloudflare<{ aiGateway: { billing: { topup: BaseTopup } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.aiGateway.billing.topup.create({ account_id: 'account_id', amount: 5000 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.aiGateway.billing.topup.create({ account_id: 'account_id', amount: 5000 });
  });

  test('status: only required params', async () => {
    const responsePromise = client.aiGateway.billing.topup.status({
      account_id: 'account_id',
      payment_intent_id: 'in_1abc',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('status: required and optional params', async () => {
    const response = await client.aiGateway.billing.topup.status({
      account_id: 'account_id',
      payment_intent_id: 'in_1abc',
    });
  });
};
describe('resource topup', () => runTests(client));
describe('resource topup (tree shakable, base)', () => runTests(partialClient));
describe('resource topup (tree shakable, subresource)', () => runTests(parentPartialClient));
