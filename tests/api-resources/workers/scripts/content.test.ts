// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseContent } from 'cloudflare/resources/workers/scripts/content';
import { Scripts } from 'cloudflare/resources/workers/scripts/scripts';

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
  resources: [BaseContent],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Scripts],
});

const runTests = (client: PartialCloudflare<{ workers: { scripts: { content: BaseContent } } }>) => {
  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.workers.scripts.content.update('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      metadata: {},
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
  test.skip('update: required and optional params', async () => {
    const response = await client.workers.scripts.content.update('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      metadata: { body_part: 'worker.js', main_module: 'worker.js' },
      files: [await toFile(Buffer.from('# my file contents'), 'README.md')],
      'CF-WORKER-BODY-PART': 'CF-WORKER-BODY-PART',
      'CF-WORKER-MAIN-MODULE-PART': 'CF-WORKER-MAIN-MODULE-PART',
    });
  });

  test('get: required and optional params', async () => {
    const response = await client.workers.scripts.content.get('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource content', () => runTests(client));
describe('resource content (tree shakable, base)', () => runTests(partialClient));
describe('resource content (tree shakable, subresource)', () => runTests(parentPartialClient));
