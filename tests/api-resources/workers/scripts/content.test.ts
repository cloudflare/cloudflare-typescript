// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource content', () => {
  test('update: only required params', async () => {
    const responsePromise = cloudflare.workers.scripts.content.update('this-is_my_script-01', {
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

  test('update: required and optional params', async () => {
    const response = await cloudflare.workers.scripts.content.update('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      '<any part name>': [
        await toFile(Buffer.from('# my file contents'), 'README.md'),
        await toFile(Buffer.from('# my file contents'), 'README.md'),
        await toFile(Buffer.from('# my file contents'), 'README.md'),
      ],
      metadata: { body_part: 'worker.js', main_module: 'worker.js' },
      'CF-WORKER-BODY-PART': 'string',
      'CF-WORKER-MAIN-MODULE-PART': 'string',
    });
  });

  test('get: required and optional params', async () => {
    const response = await cloudflare.workers.scripts.content.get('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
