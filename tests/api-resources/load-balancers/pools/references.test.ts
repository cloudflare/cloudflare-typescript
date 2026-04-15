// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Pools } from 'cloudflare/resources/load-balancers/pools/pools';
import { BaseReferences } from 'cloudflare/resources/load-balancers/pools/references';

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
  resources: [BaseReferences],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Pools],
});

const runTests = (
  client: PartialCloudflare<{ loadBalancers: { pools: { references: BaseReferences } } }>,
) => {
  test('get: only required params', async () => {
    const responsePromise = client.loadBalancers.pools.references.get('17b5962d775c646f3f9725cbc7a53df4', {
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

  test('get: required and optional params', async () => {
    const response = await client.loadBalancers.pools.references.get('17b5962d775c646f3f9725cbc7a53df4', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource references', () => runTests(client));
describe('resource references (tree shakable, base)', () => runTests(partialClient));
describe('resource references (tree shakable, subresource)', () => runTests(parentPartialClient));
