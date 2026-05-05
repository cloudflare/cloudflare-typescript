// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseBlobs } from 'cloudflare/resources/images/v1/blobs';
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
  resources: [BaseBlobs],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [V1],
});

const runTests = (client: PartialCloudflare<{ images: { v1: { blobs: BaseBlobs } } }>) => {
  // TODO: investigate broken test
  test.skip('get: required and optional params', async () => {
    const response = await client.images.v1.blobs.get('image_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource blobs', () => runTests(client));
describe('resource blobs (tree shakable, base)', () => runTests(partialClient));
describe('resource blobs (tree shakable, subresource)', () => runTests(parentPartialClient));
