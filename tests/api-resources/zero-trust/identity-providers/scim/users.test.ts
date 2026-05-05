// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { SCIM } from 'cloudflare/resources/zero-trust/identity-providers/scim/scim';
import { BaseUsers } from 'cloudflare/resources/zero-trust/identity-providers/scim/users';

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
  resources: [BaseUsers],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [SCIM],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { identityProviders: { scim: { users: BaseUsers } } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.identityProviders.scim.users.list(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.identityProviders.scim.users.list(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        cf_resource_id: ['bd97ef8d-7986-43e3-9ee0-c25dda33e4b0'],
        email: 'john.smith@example.com',
        idp_resource_id: ['john_smith_01'],
        name: 'John Smith',
        page: 0,
        per_page: 0,
        username: 'John Smith',
      },
    );
  });
};
describe('resource users', () => runTests(client));
describe('resource users (tree shakable, base)', () => runTests(partialClient));
describe('resource users (tree shakable, subresource)', () => runTests(parentPartialClient));
