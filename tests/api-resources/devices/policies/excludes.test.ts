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

describe('resource excludes', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = cloudflare.devices.policies.excludes.list('699d98642c564d2e855e9661899b7252');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.devices.policies.excludes.list('699d98642c564d2e855e9661899b7252', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('replace: only required params', async () => {
    const responsePromise = cloudflare.devices.policies.excludes.replace('699d98642c564d2e855e9661899b7252', [
      { address: '192.0.2.0/24', description: 'Exclude testing domains from the tunnel' },
      { address: '192.0.2.0/24', description: 'Exclude testing domains from the tunnel' },
      { address: '192.0.2.0/24', description: 'Exclude testing domains from the tunnel' },
    ]);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('replace: required and optional params', async () => {
    const response = await cloudflare.devices.policies.excludes.replace('699d98642c564d2e855e9661899b7252', [
      {
        address: '192.0.2.0/24',
        description: 'Exclude testing domains from the tunnel',
        host: '*.example.com',
      },
      {
        address: '192.0.2.0/24',
        description: 'Exclude testing domains from the tunnel',
        host: '*.example.com',
      },
      {
        address: '192.0.2.0/24',
        description: 'Exclude testing domains from the tunnel',
        host: '*.example.com',
      },
    ]);
  });
});
