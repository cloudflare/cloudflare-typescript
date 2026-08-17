// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAccountRules } from 'cloudflare/resources/email-routing/account-rules';
import { EmailRouting } from 'cloudflare/resources/email-routing/email-routing';

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
  resources: [BaseAccountRules],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [EmailRouting],
});

const runTests = (client: PartialCloudflare<{ emailRouting: { accountRules: BaseAccountRules } }>) => {
  test('list', async () => {
    const responsePromise = client.emailRouting.accountRules.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource accountRules', () => runTests(client));
describe('resource accountRules (tree shakable, base)', () => runTests(partialClient));
describe('resource accountRules (tree shakable, subresource)', () => runTests(parentPartialClient));
