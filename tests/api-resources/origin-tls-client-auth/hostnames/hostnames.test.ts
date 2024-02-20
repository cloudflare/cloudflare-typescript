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

describe('resource hostnames', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.originTLSClientAuth.hostnames.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { config: [{}, {}, {}] },
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
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.originTLSClientAuth.hostnames.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        config: [
          { cert_id: '2458ce5a-0c35-4c7f-82c7-8e9487d3ff60', enabled: true, hostname: 'app.example.com' },
          { cert_id: '2458ce5a-0c35-4c7f-82c7-8e9487d3ff60', enabled: true, hostname: 'app.example.com' },
          { cert_id: '2458ce5a-0c35-4c7f-82c7-8e9487d3ff60', enabled: true, hostname: 'app.example.com' },
        ],
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.originTLSClientAuth.hostnames.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'app.example.com',
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
      cloudflare.originTLSClientAuth.hostnames.get('023e105f4ecef8ad9ca31a8372d0c353', 'app.example.com', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
