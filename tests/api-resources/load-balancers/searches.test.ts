// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { LoadBalancers } from 'cloudflare/resources/load-balancers/load-balancers';
import { BaseSearches } from 'cloudflare/resources/load-balancers/searches';

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
  resources: [BaseSearches],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [LoadBalancers],
});

const runTests = (client: PartialCloudflare<{ loadBalancers: { searches: BaseSearches } }>) => {
  // TODO: investigate broken test
  test.skip('list: only required params', async () => {
    const responsePromise = client.loadBalancers.searches.list({
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

  // TODO: investigate broken test
  test.skip('list: required and optional params', async () => {
    const response = await client.loadBalancers.searches.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 1,
      per_page: 1,
      query: 'primary',
      references: '*',
    });
  });
};
describe('resource searches', () => runTests(client));
describe('resource searches (tree shakable, base)', () => runTests(partialClient));
describe('resource searches (tree shakable, subresource)', () => runTests(parentPartialClient));
