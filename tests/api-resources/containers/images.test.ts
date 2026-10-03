// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Containers } from 'cloudflare/resources/containers/containers';
import { BaseImages } from 'cloudflare/resources/containers/images';

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
  resources: [BaseImages],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Containers],
});

const runTests = (client: PartialCloudflare<{ containers: { images: BaseImages } }>) => {
  test('prepare: only required params', async () => {
    const responsePromise = client.containers.images.prepare({ account_id: 'account-123', image: 'image' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('prepare: required and optional params', async () => {
    const response = await client.containers.images.prepare({ account_id: 'account-123', image: 'image' });
  });
};
describe('resource images', () => runTests(client));
describe('resource images (tree shakable, base)', () => runTests(partialClient));
describe('resource images (tree shakable, subresource)', () => runTests(parentPartialClient));
