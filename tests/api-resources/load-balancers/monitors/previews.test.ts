// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource previews', () => {
  test('create: only required params', async () => {
    const responsePromise = client.loadBalancers.monitors.previews.create(
      'f1aba936b94213e5b8dca0c0dbf1f9cc',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', expected_codes: '2xx' },
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
    const response = await client.loadBalancers.monitors.previews.create('f1aba936b94213e5b8dca0c0dbf1f9cc', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      expected_codes: '2xx',
      allow_insecure: true,
      consecutive_down: 0,
      consecutive_up: 0,
      description: 'Login page monitor',
      expected_body: 'alive',
      follow_redirects: true,
      header: { Host: ['example.com'], 'X-App-ID': ['abc123'] },
      interval: 0,
      method: 'GET',
      path: '/health',
      port: 0,
      probe_zone: 'example.com',
      retries: 0,
      timeout: 0,
      type: 'http',
    });
  });
});
