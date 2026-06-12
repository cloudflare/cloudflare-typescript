// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseTenants } from 'cloudflare/resources/user/tenants';
import { User } from 'cloudflare/resources/user/user';

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
  resources: [BaseTenants],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [User],
});

const runTests = (client: PartialCloudflare<{ user: { tenants: BaseTenants } }>) => {
  test('list', async () => {
    const responsePromise = client.user.tenants.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource tenants', () => runTests(client));
describe('resource tenants (tree shakable, base)', () => runTests(partialClient));
describe('resource tenants (tree shakable, subresource)', () => runTests(parentPartialClient));
