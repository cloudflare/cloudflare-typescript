// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Streams } from 'cloudflare/resources/k2/streams/streams';
import { BaseSubscriptions } from 'cloudflare/resources/k2/streams/subscriptions';

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
  resources: [BaseSubscriptions],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Streams],
});

const runTests = (client: PartialCloudflare<{ k2: { streams: { subscriptions: BaseSubscriptions } } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.k2.streams.subscriptions.list('053e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.k2.streams.subscriptions.list('053e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource subscriptions', () => runTests(client));
describe('resource subscriptions (tree shakable, base)', () => runTests(partialClient));
describe('resource subscriptions (tree shakable, subresource)', () => runTests(parentPartialClient));
