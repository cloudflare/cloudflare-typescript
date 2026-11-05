// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAccounts } from 'cloudflare/resources/tenants/accounts';
import { Tenants } from 'cloudflare/resources/tenants/tenants';

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
  resources: [BaseAccounts],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Tenants],
});

const runTests = (client: PartialCloudflare<{ tenants: { accounts: BaseAccounts } }>) => {
  test('list', async () => {
    const responsePromise = client.tenants.accounts.list('tenant_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tenants.accounts.list(
        'tenant_id',
        {
          account_pubname: {
            contains: 'contains',
            endsWith: 'endsWith',
            startsWith: 'startsWith',
          },
          direction: 'asc',
          include_total: true,
          name: {
            contains: 'contains',
            endsWith: 'endsWith',
            startsWith: 'startsWith',
          },
          order_by: 'account_name',
          page: 0,
          page_size: 0,
          page_token: 'page_token',
          per_page: 0,
          status: 'active',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource accounts', () => runTests(client));
describe('resource accounts (tree shakable, base)', () => runTests(partialClient));
describe('resource accounts (tree shakable, subresource)', () => runTests(parentPartialClient));
