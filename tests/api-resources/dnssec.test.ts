// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource dnssec', () => {
  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.dnssec.delete({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
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
    const response = await cloudflare.dnssec.delete({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  // skipped: tests are disabled for the time being
  test.skip('edit: only required params', async () => {
    const responsePromise = cloudflare.dnssec.edit({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('edit: required and optional params', async () => {
    const response = await cloudflare.dnssec.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      dnssec_multi_signer: false,
      dnssec_presigned: true,
      status: 'active',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.dnssec.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.dnssec.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
