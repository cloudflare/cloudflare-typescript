// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Commands } from 'cloudflare/resources/zero-trust/dex/commands/commands';
import { BaseDownloads } from 'cloudflare/resources/zero-trust/dex/commands/downloads';

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
  resources: [BaseDownloads],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Commands],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { dex: { commands: { downloads: BaseDownloads } } } }>,
) => {
  // Mock server doesn't support application/zip responses
  test.skip('get: required and optional params', async () => {
    const response = await client.zeroTrust.dex.commands.downloads.get('filename', {
      account_id: '01a7362d577a6c3019a474fd6f485823',
      command_id: '5758fefe-ae7e-4538-a39b-1fef6abcb909',
    });
  });
};
describe('resource downloads', () => runTests(client));
describe('resource downloads (tree shakable, base)', () => runTests(partialClient));
describe('resource downloads (tree shakable, subresource)', () => runTests(parentPartialClient));
