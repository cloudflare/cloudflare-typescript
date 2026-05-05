// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAssets } from 'cloudflare/resources/ai/finetunes/assets';
import { Finetunes } from 'cloudflare/resources/ai/finetunes/finetunes';

import Cloudflare, { toFile } from 'cloudflare';
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
  resources: [BaseAssets],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Finetunes],
});

const runTests = (client: PartialCloudflare<{ ai: { finetunes: { assets: BaseAssets } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.ai.finetunes.assets.create('bc451aef-f723-4b26-a6b2-901afd2e7a8a', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      file: await toFile(Buffer.from('Example data'), 'README.md'),
      file_name: 'file_name',
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
    const response = await client.ai.finetunes.assets.create('bc451aef-f723-4b26-a6b2-901afd2e7a8a', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      file: await toFile(Buffer.from('Example data'), 'README.md'),
      file_name: 'file_name',
    });
  });
};
describe('resource assets', () => runTests(client));
describe('resource assets (tree shakable, base)', () => runTests(partialClient));
describe('resource assets (tree shakable, subresource)', () => runTests(parentPartialClient));
