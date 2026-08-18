// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseGroups } from 'cloudflare/resources/zero-trust/identity-providers/scim/groups';
import { SCIM } from 'cloudflare/resources/zero-trust/identity-providers/scim/scim';

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
  resources: [BaseGroups],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [SCIM],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { identityProviders: { scim: { groups: BaseGroups } } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.identityProviders.scim.groups.list(
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
    const response = await client.zeroTrust.identityProviders.scim.groups.list(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        cf_resource_id: ['a2abeb50-59c9-4c01-8c5c-963d3bf5700f'],
        idp_resource_id: ['all_employees'],
        name: 'ALL_EMPLOYEES',
        page: 0,
        per_page: 0,
      },
    );
  });
};
describe('resource groups', () => runTests(client));
describe('resource groups (tree shakable, base)', () => runTests(partialClient));
describe('resource groups (tree shakable, subresource)', () => runTests(parentPartialClient));
