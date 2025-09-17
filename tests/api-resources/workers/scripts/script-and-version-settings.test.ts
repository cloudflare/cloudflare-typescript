// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scriptAndVersionSettings', () => {
  // 422 Unprocessable Entity: needs schema update which is merged but not published
  test.skip('edit: only required params', async () => {
    const responsePromise = client.workers.scripts.scriptAndVersionSettings.edit('this-is_my_script-01', {
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

  // 422 Unprocessable Entity: needs schema update which is merged but not published
  test.skip('edit: required and optional params', async () => {
    const response = await client.workers.scripts.scriptAndVersionSettings.edit('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      settings: {
        bindings: [{ name: 'MY_ENV_VAR', text: 'my_data', type: 'plain_text' }],
        compatibility_date: '2021-01-01',
        compatibility_flags: ['nodejs_compat'],
        limits: { cpu_ms: 50 },
        logpush: false,
        migrations: {
          deleted_classes: ['string'],
          new_classes: ['string'],
          new_sqlite_classes: ['string'],
          new_tag: 'v2',
          old_tag: 'v1',
          renamed_classes: [{ from: 'from', to: 'to' }],
          transferred_classes: [{ from: 'from', from_script: 'from_script', to: 'to' }],
        },
        observability: {
          enabled: true,
          head_sampling_rate: 0.1,
          logs: {
            enabled: true,
            invocation_logs: true,
            destinations: ['cloudflare'],
            head_sampling_rate: 0.1,
            persist: true,
          },
        },
        placement: { mode: 'smart' },
        tags: ['my-team', 'my-public-api'],
        tail_consumers: [
          { service: 'my-log-consumer', environment: 'production', namespace: 'my-namespace' },
        ],
        usage_model: 'standard',
      },
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.workers.scripts.scriptAndVersionSettings.get('this-is_my_script-01', {
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
    const response = await client.workers.scripts.scriptAndVersionSettings.get('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
