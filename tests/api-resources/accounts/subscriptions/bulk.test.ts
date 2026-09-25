// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBulk } from 'cloudflare/resources/accounts/subscriptions/bulk';
import { Subscriptions } from 'cloudflare/resources/accounts/subscriptions/subscriptions';

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
  resources: [BaseBulk],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Subscriptions],
});

const runTests = (client: PartialCloudflare<{ accounts: { subscriptions: { bulk: BaseBulk } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.accounts.subscriptions.bulk.create({
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
    const response = await client.accounts.subscriptions.bulk.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      idemp_key: 'idemp_key',
      coupon_code: 'coupon_code',
      payment_hold_id: 0,
      subscriptions: [
        {
          frequency: 'monthly',
          rate_plan: {
            id: 'free',
            currency: 'USD',
            externally_managed: false,
            is_contract: false,
            public_name: 'Business Plan',
            scope: 'zone',
            sets: ['string'],
          },
        },
      ],
      user_is_on_session: true,
    });
  });
};
describe('resource bulk', () => runTests(client));
describe('resource bulk (tree shakable, base)', () => runTests(partialClient));
describe('resource bulk (tree shakable, subresource)', () => runTests(parentPartialClient));
