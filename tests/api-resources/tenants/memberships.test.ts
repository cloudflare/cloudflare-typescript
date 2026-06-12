// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseMemberships } from 'cloudflare/resources/tenants/memberships';
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
  resources: [BaseMemberships],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Tenants],
});

const runTests = (client: PartialCloudflare<{ tenants: { memberships: BaseMemberships } }>) => {
  test('list', async () => {
    const responsePromise = client.tenants.memberships.list('tenant_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
};
describe('resource memberships', () => runTests(client));
describe('resource memberships (tree shakable, base)', () => runTests(partialClient));
describe('resource memberships (tree shakable, subresource)', () => runTests(parentPartialClient));
