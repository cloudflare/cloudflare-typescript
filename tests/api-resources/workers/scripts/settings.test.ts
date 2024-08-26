// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource settings', () => {
  test('edit: only required params', async () => {
    const responsePromise = client.workers.scripts.settings.edit('this-is_my_script-01', {
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

  test('edit: required and optional params', async () => {
    const response = await client.workers.scripts.settings.edit('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      logpush: false,
      tail_consumers: [
        { service: 'my-log-consumer', environment: 'production', namespace: 'my-namespace' },
        { service: 'my-log-consumer', environment: 'production', namespace: 'my-namespace' },
        { service: 'my-log-consumer', environment: 'production', namespace: 'my-namespace' },
      ],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.workers.scripts.settings.get('this-is_my_script-01', {
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
    const response = await client.workers.scripts.settings.get('this-is_my_script-01', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
