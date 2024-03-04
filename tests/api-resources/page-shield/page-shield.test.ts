// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource pageShield', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.pageShield.update({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
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
    const response = await cloudflare.pageShield.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      enabled: true,
      use_cloudflare_reporting_endpoint: true,
      use_connection_url_path: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.pageShield.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.pageShield.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
