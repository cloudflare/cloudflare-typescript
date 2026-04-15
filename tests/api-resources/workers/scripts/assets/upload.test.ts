// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Assets } from 'cloudflare/resources/workers/scripts/assets/assets';
import { BaseUpload } from 'cloudflare/resources/workers/scripts/assets/upload';

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
  resources: [BaseUpload],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Assets],
});

const runTests = (
  client: PartialCloudflare<{ workers: { scripts: { assets: { upload: BaseUpload } } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.workers.scripts.assets.upload.create('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      manifest: { foo: { hash: 'hash', size: 0 } },
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
    const response = await client.workers.scripts.assets.upload.create('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      manifest: { foo: { hash: 'hash', size: 0 } },
    });
  });
};
describe('resource upload', () => runTests(client));
describe('resource upload (tree shakable, base)', () => runTests(partialClient));
describe('resource upload (tree shakable, subresource)', () => runTests(parentPartialClient));
