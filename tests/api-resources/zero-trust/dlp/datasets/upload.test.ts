// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Datasets } from 'cloudflare/resources/zero-trust/dlp/datasets/datasets';
import { BaseUpload } from 'cloudflare/resources/zero-trust/dlp/datasets/upload';

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
  resources: [BaseUpload],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Datasets],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { dlp: { datasets: { upload: BaseUpload } } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.datasets.upload.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.zeroTrust.dlp.datasets.upload.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
  });

  // TODO: investigate broken test
  test.skip('edit: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.datasets.upload.edit(
      0,
      await toFile(Buffer.from('# my file contents'), 'README.md'),
      { account_id: 'account_id', dataset_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('edit: required and optional params', async () => {
    const response = await client.zeroTrust.dlp.datasets.upload.edit(
      0,
      await toFile(Buffer.from('# my file contents'), 'README.md'),
      { account_id: 'account_id', dataset_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
    );
  });
};
describe('resource upload', () => runTests(client));
describe('resource upload (tree shakable, base)', () => runTests(partialClient));
describe('resource upload (tree shakable, subresource)', () => runTests(parentPartialClient));
