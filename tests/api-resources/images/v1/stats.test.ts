// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseStats } from 'cloudflare/resources/images/v1/stats';
import { V1 } from 'cloudflare/resources/images/v1/v1';

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
  resources: [BaseStats],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [V1],
});

const runTests = (client: PartialCloudflare<{ images: { v1: { stats: BaseStats } } }>) => {
  test('get: only required params', async () => {
    const responsePromise = client.images.v1.stats.get({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.images.v1.stats.get({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
};
describe('resource stats', () => runTests(client));
describe('resource stats (tree shakable, base)', () => runTests(partialClient));
describe('resource stats (tree shakable, subresource)', () => runTests(parentPartialClient));
