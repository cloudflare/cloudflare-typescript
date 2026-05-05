// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseDirectUploads } from 'cloudflare/resources/images/v2/direct-uploads';
import { V2 } from 'cloudflare/resources/images/v2/v2';

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
  resources: [BaseDirectUploads],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [V2],
});

const runTests = (client: PartialCloudflare<{ images: { v2: { directUploads: BaseDirectUploads } } }>) => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.images.v2.directUploads.create({
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
  test.skip('create: required and optional params', async () => {
    const response = await client.images.v2.directUploads.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      id: 'this/is/my-customid',
      creator: 'creator',
      expiry: '2021-01-02T02:20:00Z',
      metadata: {},
      requireSignedURLs: true,
    });
  });
};
describe('resource directUploads', () => runTests(client));
describe('resource directUploads (tree shakable, base)', () => runTests(partialClient));
describe('resource directUploads (tree shakable, subresource)', () => runTests(parentPartialClient));
