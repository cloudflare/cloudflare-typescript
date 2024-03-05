// File generated from our OpenAPI spec by Stainless.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scripts', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.workers.scripts.update('this-is_my_script-01', {
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

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.workers.scripts.update('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      rollback_to: 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      '<any part name>': [
        await toFile(Buffer.from('# my file contents'), 'README.md'),
        await toFile(Buffer.from('# my file contents'), 'README.md'),
        await toFile(Buffer.from('# my file contents'), 'README.md'),
      ],
      message: 'string',
      metadata: {
        bindings: [{}, {}, {}],
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
            { from: 'string', to: 'string' },
            { from: 'string', to: 'string' },
            { from: 'string', to: 'string' },
          ],
          transferred_classes: [
            { from: 'string', from_script: 'string', to: 'string' },
            { from: 'string', from_script: 'string', to: 'string' },
            { from: 'string', from_script: 'string', to: 'string' },
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

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.workers.scripts.list({
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

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.workers.scripts.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.workers.scripts.delete('this-is_my_script-01', {
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

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.workers.scripts.delete('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      force: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.workers.scripts.get('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
