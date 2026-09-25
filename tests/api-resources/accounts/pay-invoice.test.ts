// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Accounts } from 'cloudflare/resources/accounts/accounts';
import { BasePayInvoice } from 'cloudflare/resources/accounts/pay-invoice';

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
  resources: [BasePayInvoice],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Accounts],
});

const runTests = (client: PartialCloudflare<{ accounts: { payInvoice: BasePayInvoice } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.accounts.payInvoice.create({
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

  test('create: required and optional params', async () => {
    const response = await client.accounts.payInvoice.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      invoice_id: 'invoice_id',
      payment_method_id: 'payment_method_id',
      validate_payment_method: true,
    });
  });
};
describe('resource payInvoice', () => runTests(client));
describe('resource payInvoice (tree shakable, base)', () => runTests(partialClient));
describe('resource payInvoice (tree shakable, subresource)', () => runTests(parentPartialClient));
