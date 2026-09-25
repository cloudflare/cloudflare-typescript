// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Accounts } from 'cloudflare/resources/accounts/accounts';
import { BaseInvoices } from 'cloudflare/resources/accounts/invoices';

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
  resources: [BaseInvoices],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Accounts],
});

const runTests = (client: PartialCloudflare<{ accounts: { invoices: BaseInvoices } }>) => {
  test('edit: only required params', async () => {
    const responsePromise = client.accounts.invoices.edit({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.accounts.invoices.edit({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      toggle: true,
    });
  });
};
describe('resource invoices', () => runTests(client));
describe('resource invoices (tree shakable, base)', () => runTests(partialClient));
describe('resource invoices (tree shakable, subresource)', () => runTests(parentPartialClient));
