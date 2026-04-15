// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseDownload } from 'cloudflare/resources/magic-transit/pcaps/download';
import { PCAPs } from 'cloudflare/resources/magic-transit/pcaps/pcaps';

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
  resources: [BaseDownload],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [PCAPs],
});

const runTests = (client: PartialCloudflare<{ magicTransit: { pcaps: { download: BaseDownload } } }>) => {
  // TODO: investigate broken test
  test.skip('get: required and optional params', async () => {
    const response = await client.magicTransit.pcaps.download.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource download', () => runTests(client));
describe('resource download (tree shakable, base)', () => runTests(partialClient));
describe('resource download (tree shakable, subresource)', () => runTests(parentPartialClient));
