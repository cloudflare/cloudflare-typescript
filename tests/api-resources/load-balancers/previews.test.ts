// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { LoadBalancers } from 'cloudflare/resources/load-balancers/load-balancers';
import { BasePreviews } from 'cloudflare/resources/load-balancers/previews';

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
  resources: [BasePreviews],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [LoadBalancers],
});

const runTests = (client: PartialCloudflare<{ loadBalancers: { previews: BasePreviews } }>) => {
  test('get: only required params', async () => {
    const responsePromise = client.loadBalancers.previews.get('p1aba936b94213e5b8dca0c0dbf1f9cc', {
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
    const response = await client.loadBalancers.previews.get('p1aba936b94213e5b8dca0c0dbf1f9cc', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource previews', () => runTests(client));
describe('resource previews (tree shakable, base)', () => runTests(partialClient));
describe('resource previews (tree shakable, subresource)', () => runTests(parentPartialClient));
