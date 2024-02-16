// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'dev@cloudflare.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey: 'My User Service Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource previews', () => {
  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.healthchecks.previews.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.healthchecks.previews.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '023e105f4ecef8ad9ca31a8372d0c353',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.healthchecks.previews.get(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '023e105f4ecef8ad9ca31a8372d0c353',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('healthChecksCreatePreviewHealthCheck: only required params', async () => {
    const responsePromise = cloudflare.healthchecks.previews.healthChecksCreatePreviewHealthCheck(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { address: 'www.example.com', name: 'server-1' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('healthChecksCreatePreviewHealthCheck: required and optional params', async () => {
    const response = await cloudflare.healthchecks.previews.healthChecksCreatePreviewHealthCheck(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        address: 'www.example.com',
        name: 'server-1',
        check_regions: ['WEU', 'ENAM'],
        consecutive_fails: 0,
        consecutive_successes: 0,
        description: 'Health check for www.example.com',
        http_config: {
          allow_insecure: true,
          expected_body: 'success',
          expected_codes: ['2xx', '302'],
          follow_redirects: true,
          header: { Host: ['example.com'], 'X-App-ID': ['abc123'] },
          method: 'GET',
          path: '/health',
          port: 0,
        },
        interval: 0,
        retries: 0,
        suspended: true,
        tcp_config: { method: 'connection_established', port: 0 },
        timeout: 0,
        type: 'HTTPS',
      },
    );
  });
});
