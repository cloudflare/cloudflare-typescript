// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Stream } from 'cloudflare/resources/stream/stream';
import { BaseVideos } from 'cloudflare/resources/stream/videos';

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
  resources: [BaseVideos],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Stream],
});

const runTests = (client: PartialCloudflare<{ stream: { videos: BaseVideos } }>) => {
  test('storageUsage: only required params', async () => {
    const responsePromise = client.stream.videos.storageUsage({
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

  test('storageUsage: required and optional params', async () => {
    const response = await client.stream.videos.storageUsage({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      creator: 'creator-id_abcde12345',
    });
  });
};
describe('resource videos', () => runTests(client));
describe('resource videos (tree shakable, base)', () => runTests(partialClient));
describe('resource videos (tree shakable, subresource)', () => runTests(parentPartialClient));
