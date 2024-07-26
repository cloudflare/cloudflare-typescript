// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scripts', () => {
  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.workers.scripts.update('this-is_my_script-01', {
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

  // TODO: investigate broken test
  test.skip('update: required and optional params', async () => {
    const response = await client.workers.scripts.update('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      rollback_to: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      '<any part name>': [
        await toFile(Buffer.from('# my file contents'), 'README.md'),
        await toFile(Buffer.from('# my file contents'), 'README.md'),
        await toFile(Buffer.from('# my file contents'), 'README.md'),
      ],
      metadata: {
        bindings: [{ name: 'MY_ENV_VAR', text: 'my_data', type: 'plain_text' }],
        body_part: 'worker.js',
        compatibility_date: '2023-07-25',
        compatibility_flags: ['string', 'string', 'string'],
        keep_bindings: ['string', 'string', 'string'],
        logpush: false,
        main_module: 'worker.js',
        migrations: {
          new_tag: 'v2',
          old_tag: 'v1',
          deleted_classes: ['string', 'string', 'string'],
          new_classes: ['string', 'string', 'string'],
          renamed_classes: [
            { from: 'from', to: 'to' },
            { from: 'from', to: 'to' },
            { from: 'from', to: 'to' },
          ],
          transferred_classes: [
            { from: 'from', from_script: 'from_script', to: 'to' },
            { from: 'from', from_script: 'from_script', to: 'to' },
            { from: 'from', from_script: 'from_script', to: 'to' },
          ],
        },
        placement: { mode: 'smart' },
        tags: ['string', 'string', 'string'],
        tail_consumers: [
          { environment: 'production', namespace: 'my-namespace', service: 'my-log-consumer' },
          { environment: 'production', namespace: 'my-namespace', service: 'my-log-consumer' },
          { environment: 'production', namespace: 'my-namespace', service: 'my-log-consumer' },
        ],
        usage_model: 'bundled',
        version_tags: {},
      },
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.workers.scripts.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.workers.scripts.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.workers.scripts.delete('this-is_my_script-01', {
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

  test('delete: required and optional params', async () => {
    const response = await client.workers.scripts.delete('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      force: true,
    });
  });

  test('get: required and optional params', async () => {
    const response = await client.workers.scripts.get('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
