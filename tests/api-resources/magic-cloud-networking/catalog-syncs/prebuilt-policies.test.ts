// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { CatalogSyncs } from 'cloudflare/resources/magic-cloud-networking/catalog-syncs/catalog-syncs';
import { BasePrebuiltPolicies } from 'cloudflare/resources/magic-cloud-networking/catalog-syncs/prebuilt-policies';

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
  resources: [BasePrebuiltPolicies],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [CatalogSyncs],
});

const runTests = (
  client: PartialCloudflare<{
    magicCloudNetworking: { catalogSyncs: { prebuiltPolicies: BasePrebuiltPolicies } };
  }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.catalogSyncs.prebuiltPolicies.list({
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.magicCloudNetworking.catalogSyncs.prebuiltPolicies.list({
      account_id: 'account_id',
      destination_type: 'NONE',
    });
  });
};
describe('resource prebuiltPolicies', () => runTests(client));
describe('resource prebuiltPolicies (tree shakable, base)', () => runTests(partialClient));
describe('resource prebuiltPolicies (tree shakable, subresource)', () => runTests(parentPartialClient));
