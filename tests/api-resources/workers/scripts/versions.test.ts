// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Scripts } from 'cloudflare/resources/workers/scripts/scripts';
import { BaseVersions } from 'cloudflare/resources/workers/scripts/versions';

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
  resources: [BaseVersions],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Scripts],
});

const runTests = (client: PartialCloudflare<{ workers: { scripts: { versions: BaseVersions } } }>) => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.workers.scripts.versions.create('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      metadata: { main_module: 'worker.js' },
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
    const response = await client.workers.scripts.versions.create('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      metadata: {
        main_module: 'worker.js',
        annotations: {
          'workers/alias': 'staging',
          'workers/message': 'Fixed worker code.',
          'workers/tag': 'any-identifier-from-external-system',
        },
        bindings: [
          {
            name: 'MY_ENV_VAR',
            text: 'my_data',
            type: 'plain_text',
          },
        ],
        compatibility_date: '2021-01-01',
        compatibility_flags: ['nodejs_compat'],
        keep_bindings: ['string'],
        package_dependencies: [
          {
            installedVersion: '4.17.22',
            name: 'lodash',
            packageJsonVersion: '^4.17.21',
          },
        ],
        usage_model: 'standard',
      },
      bindings_inherit: 'strict',
      files: [await toFile(Buffer.from('Example data'), 'README.md')],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.workers.scripts.versions.list('this-is_my_script-01', {
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

  test('list: required and optional params', async () => {
    const response = await client.workers.scripts.versions.list('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      deployable: true,
      page: 0,
      per_page: 0,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.workers.scripts.versions.get('bcf48806-b317-4351-9ee7-36e7d557d4de', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      script_name: 'this-is_my_script-01',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.workers.scripts.versions.get('bcf48806-b317-4351-9ee7-36e7d557d4de', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      script_name: 'this-is_my_script-01',
    });
  });
};
describe('resource versions', () => runTests(client));
describe('resource versions (tree shakable, base)', () => runTests(partialClient));
describe('resource versions (tree shakable, subresource)', () => runTests(parentPartialClient));
