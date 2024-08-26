// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource versions', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.workers.scripts.versions.create('this-is_my_script-01', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
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
    const response = await client.workers.scripts.versions.create('this-is_my_script-01', { account_id: '023e105f4ecef8ad9ca31a8372d0c353', '<any part name>': [await toFile(Buffer.from('# my file contents'), 'README.md'), await toFile(Buffer.from('# my file contents'), 'README.md'), await toFile(Buffer.from('# my file contents'), 'README.md')], metadata: { annotations: { 'workers/message': 'Fixed worker code.', 'workers/tag': 'workers/tag' }, bindings: [{ name: 'MY_ENV_VAR', text: 'my_data', type: 'plain_text' }], compatibility_date: '2023-07-25', compatibility_flags: ['string', 'string', 'string'], keep_bindings: ['string', 'string', 'string'], main_module: 'worker.js', usage_model: 'standard' } });
  });

  test('list: only required params', async () => {
    const responsePromise = client.workers.scripts.versions.list('this-is_my_script-01', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.workers.scripts.versions.list('this-is_my_script-01', { account_id: '023e105f4ecef8ad9ca31a8372d0c353', deployable: true, page: 0, per_page: 0 });
  });

  test('get: only required params', async () => {
    const responsePromise = client.workers.scripts.versions.get('this-is_my_script-01', 'bcf48806-b317-4351-9ee7-36e7d557d4de', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.workers.scripts.versions.get('this-is_my_script-01', 'bcf48806-b317-4351-9ee7-36e7d557d4de', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
