// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseContent } from 'cloudflare/resources/snippets/content';
import { Snippets } from 'cloudflare/resources/snippets/snippets';

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
  resources: [Snippets],
});

const runTests = (client: PartialCloudflare<{ snippets: { content: BaseContent } }>) => {
  // throwing HTTP 415
  test.skip('get: required and optional params', async () => {
    const response = await client.snippets.content.get('my_snippet', {
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
    });
  });
};
describe('resource content', () => runTests(client));
describe('resource content (tree shakable, base)', () => runTests(partialClient));
describe('resource content (tree shakable, subresource)', () => runTests(parentPartialClient));
