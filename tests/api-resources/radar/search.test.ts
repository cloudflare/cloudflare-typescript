// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Radar } from 'cloudflare/resources/radar/radar';
import { BaseSearch } from 'cloudflare/resources/radar/search';

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
  resources: [BaseSearch],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Radar],
});

const runTests = (client: PartialCloudflare<{ radar: { search: BaseSearch } }>) => {
  test('global: only required params', async () => {
    const responsePromise = client.radar.search.global({ query: 'United' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('global: required and optional params', async () => {
    const response = await client.radar.search.global({
      query: 'United',
      exclude: ['ADM1S'],
      format: 'JSON',
      include: ['ADM1S'],
      limit: 1,
      limitPerGroup: 0,
    });
  });
};
describe('resource search', () => runTests(client));
describe('resource search (tree shakable, base)', () => runTests(partialClient));
describe('resource search (tree shakable, subresource)', () => runTests(parentPartialClient));
