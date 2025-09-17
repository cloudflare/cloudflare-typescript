// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource versions', () => {
  test('create: only required params', async () => {
    const responsePromise = client.workers.beta.workers.versions.create('worker_id', {
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

  test('create: required and optional params', async () => {
    const response = await client.workers.beta.workers.versions.create('worker_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      deploy: true,
      annotations: { 'workers/message': 'Fixed bug.', 'workers/tag': 'v1.0.1' },
      assets: {
        config: {
          html_handling: 'auto-trailing-slash',
          not_found_handling: '404-page',
          run_worker_first: ['string'],
        },
        jwt: 'jwt',
      },
      bindings: [{ name: 'MY_ENV_VAR', text: 'my_data', type: 'plain_text' }],
      compatibility_date: '2021-01-01',
      compatibility_flags: ['nodejs_compat'],
      limits: { cpu_ms: 50 },
      main_module: 'index.js',
      migrations: {
        deleted_classes: ['string'],
        new_classes: ['string'],
        new_sqlite_classes: ['string'],
        new_tag: 'v2',
        old_tag: 'v1',
        renamed_classes: [{ from: 'from', to: 'to' }],
        transferred_classes: [{ from: 'from', from_script: 'from_script', to: 'to' }],
      },
      modules: [
        {
          content_base64:
            'ZXhwb3J0IGRlZmF1bHQgewogIGFzeW5jIGZldGNoKHJlcXVlc3QsIGVudiwgY3R4KSB7CiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKCdIZWxsbyBXb3JsZCEnKQogIH0KfQ==',
          content_type: 'application/javascript+module',
          name: 'index.js',
        },
      ],
      placement: { mode: 'smart' },
      usage_model: 'standard',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.workers.beta.workers.versions.list('worker_id', {
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
    const response = await client.workers.beta.workers.versions.list('worker_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 1,
      per_page: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.workers.beta.workers.versions.delete('worker_id', 'version_id', {
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
    const response = await client.workers.beta.workers.versions.delete('worker_id', 'version_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.workers.beta.workers.versions.get('worker_id', 'version_id', {
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

  test('get: required and optional params', async () => {
    const response = await client.workers.beta.workers.versions.get('worker_id', 'version_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      include: 'modules',
    });
  });
});
