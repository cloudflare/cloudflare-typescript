// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BasePublish } from 'cloudflare/resources/zaraz/publish';
import { Zaraz } from 'cloudflare/resources/zaraz/zaraz';

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
  resources: [BasePublish],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Zaraz],
});

const runTests = (client: PartialCloudflare<{ zaraz: { publish: BasePublish } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.zaraz.publish.create({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.zaraz.publish.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: 'Config with enabled ecommerce tracking',
    });
  });
};
describe('resource publish', () => runTests(client));
describe('resource publish (tree shakable, base)', () => runTests(partialClient));
describe('resource publish (tree shakable, subresource)', () => runTests(parentPartialClient));
