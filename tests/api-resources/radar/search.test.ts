// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource search', () => {
  // skipped: tests are disabled for the time being
  test.skip('global: only required params', async () => {
    const responsePromise = cloudflare.radar.search.global({ query: 'United' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('global: required and optional params', async () => {
    const response = await cloudflare.radar.search.global({
      query: 'United',
      exclude: ['SPECIAL_EVENTS', 'NOTEBOOKS', 'LOCATIONS'],
      format: 'JSON',
      include: ['SPECIAL_EVENTS', 'NOTEBOOKS', 'LOCATIONS'],
      limit: 5,
      limitPerGroup: 0,
    });
  });
});
