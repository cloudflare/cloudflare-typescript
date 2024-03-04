// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource settings', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.access.certificates.settings.update({
      settings: [
        { china_network: false, client_certificate_forwarding: true, hostname: 'admin.example.com' },
        { china_network: false, client_certificate_forwarding: true, hostname: 'admin.example.com' },
        { china_network: false, client_certificate_forwarding: true, hostname: 'admin.example.com' },
      ],
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
    const response = await cloudflare.zeroTrust.access.certificates.settings.update({
      settings: [
        { china_network: false, client_certificate_forwarding: true, hostname: 'admin.example.com' },
        { china_network: false, client_certificate_forwarding: true, hostname: 'admin.example.com' },
        { china_network: false, client_certificate_forwarding: true, hostname: 'admin.example.com' },
      ],
      account_id: 'string',
      zone_id: 'string',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = cloudflare.zeroTrust.access.certificates.settings.list();
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
      cloudflare.zeroTrust.access.certificates.settings.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.zeroTrust.access.certificates.settings.list(
        { account_id: 'string', zone_id: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
