// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource settings', () => {
  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.access.certificates.settings.update({
      settings: [
        { china_network: false, client_certificate_forwarding: true, hostname: 'admin.example.com' },
        { china_network: false, client_certificate_forwarding: true, hostname: 'admin.example.com' },
        { china_network: false, client_certificate_forwarding: true, hostname: 'admin.example.com' },
      ],
      account_id: 'string',
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
    const response = await cloudflare.zeroTrust.access.certificates.settings.update({
      settings: [
        { china_network: false, client_certificate_forwarding: true, hostname: 'admin.example.com' },
        { china_network: false, client_certificate_forwarding: true, hostname: 'admin.example.com' },
        { china_network: false, client_certificate_forwarding: true, hostname: 'admin.example.com' },
      ],
      account_id: 'string',
    });
  });

  // TODO: investigate broken test
  test.skip('get', async () => {
    const responsePromise = cloudflare.zeroTrust.access.certificates.settings.get({ account_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
