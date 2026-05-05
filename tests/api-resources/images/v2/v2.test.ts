// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Images } from 'cloudflare/resources/images/images';
import { BaseV2 } from 'cloudflare/resources/images/v2/v2';

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
  resources: [BaseV2],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Images],
});

const runTests = (client: PartialCloudflare<{ images: { v2: BaseV2 } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.images.v2.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.images.v2.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      continuation_token: 'continuation_token',
      creator: 'creator',
      meta: { '<field>[<operator>]': '<field>[<operator>]' },
      per_page: 10,
      sort_order: 'asc',
    });
  });
};
describe('resource v2', () => runTests(client));
describe('resource v2 (tree shakable, base)', () => runTests(partialClient));
describe('resource v2 (tree shakable, subresource)', () => runTests(parentPartialClient));
