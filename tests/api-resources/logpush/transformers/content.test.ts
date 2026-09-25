// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseContent } from 'cloudflare/resources/logpush/transformers/content';
import { Transformers } from 'cloudflare/resources/logpush/transformers/transformers';

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
  resources: [BaseContent],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Transformers],
});

const runTests = (client: PartialCloudflare<{ logpush: { transformers: { content: BaseContent } } }>) => {
  test('get: only required params', async () => {
    const responsePromise = client.logpush.transformers.content.get(42, {
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
    const response = await client.logpush.transformers.content.get(42, {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      version_id: 0,
    });
  });
};
describe('resource content', () => runTests(client));
describe('resource content (tree shakable, base)', () => runTests(partialClient));
describe('resource content (tree shakable, subresource)', () => runTests(parentPartialClient));
