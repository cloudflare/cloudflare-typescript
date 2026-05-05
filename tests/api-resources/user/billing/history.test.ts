// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Billing } from 'cloudflare/resources/user/billing/billing';
import { BaseHistory } from 'cloudflare/resources/user/billing/history';

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
  resources: [BaseHistory],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Billing],
});

const runTests = (client: PartialCloudflare<{ user: { billing: { history: BaseHistory } } }>) => {
  test('list', async () => {
    const responsePromise = client.user.billing.history.list();
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
      client.user.billing.history.list(
        {
          action: 'subscription',
          occurred_at: '2014-03-01T12:21:59.3456Z',
          order: 'occurred_at',
          page: 1,
          per_page: 5,
          type: 'charge',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource history', () => runTests(client));
describe('resource history (tree shakable, base)', () => runTests(partialClient));
describe('resource history (tree shakable, subresource)', () => runTests(parentPartialClient));
