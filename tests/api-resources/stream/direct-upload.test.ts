// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseDirectUpload } from 'cloudflare/resources/stream/direct-upload';
import { Stream } from 'cloudflare/resources/stream/stream';

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
  resources: [BaseDirectUpload],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Stream],
});

const runTests = (client: PartialCloudflare<{ stream: { directUpload: BaseDirectUpload } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.stream.directUpload.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      maxDurationSeconds: 1,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.stream.directUpload.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      maxDurationSeconds: 1,
      allowedOrigins: ['example.com'],
      creator: 'creator-id_abcde12345',
      expiry: '2021-01-02T02:20:00Z',
      meta: { name: 'video12345.mp4' },
      requireSignedURLs: true,
      scheduledDeletion: '2014-01-02T02:20:00Z',
      thumbnailTimestampPct: 0.529241,
      watermark: { uid: 'ea95132c15732412d22c1476fa83f27a' },
      'Upload-Creator': 'creator-id_abcde12345',
    });
  });
};
describe('resource directUpload', () => runTests(client));
describe('resource directUpload (tree shakable, base)', () => runTests(partialClient));
describe('resource directUpload (tree shakable, subresource)', () => runTests(parentPartialClient));
