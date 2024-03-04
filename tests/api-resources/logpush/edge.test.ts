// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource edge', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.logpush.edge.create({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.logpush.edge.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      fields:
        'ClientIP,ClientRequestHost,ClientRequestMethod,ClientRequestURI,EdgeEndTimestamp,EdgeResponseBytes,EdgeResponseStatus,EdgeStartTimestamp,RayID',
      filter: '{"where":{"and":[{"key":"ClientCountry","operator":"neq","value":"ca"}]}}',
      sample: 1,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.logpush.edge.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
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
    const response = await cloudflare.logpush.edge.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
