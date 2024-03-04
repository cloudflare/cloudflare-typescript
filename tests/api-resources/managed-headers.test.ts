// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource managedHeaders', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.managedHeaders.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
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
    const response = await cloudflare.managedHeaders.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  // skipped: tests are disabled for the time being
  test.skip('edit: only required params', async () => {
    const responsePromise = cloudflare.managedHeaders.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      managed_request_headers: [{}, {}, {}],
      managed_response_headers: [{}, {}, {}],
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
  test.skip('edit: required and optional params', async () => {
    const response = await cloudflare.managedHeaders.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      managed_request_headers: [
        { enabled: true, id: 'add_cf-bot-score_header' },
        { enabled: true, id: 'add_cf-bot-score_header' },
        { enabled: true, id: 'add_cf-bot-score_header' },
      ],
      managed_response_headers: [
        { enabled: true, id: 'add_cf-bot-score_header' },
        { enabled: true, id: 'add_cf-bot-score_header' },
        { enabled: true, id: 'add_cf-bot-score_header' },
      ],
    });
  });
});
