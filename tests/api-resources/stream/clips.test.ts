// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource clips', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.stream.clips.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      clippedFromVideoUID: '023e105f4ecef8ad9ca31a8372d0c353',
      endTimeSeconds: 0,
      startTimeSeconds: 0,
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
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.stream.clips.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      clippedFromVideoUID: '023e105f4ecef8ad9ca31a8372d0c353',
      endTimeSeconds: 0,
      startTimeSeconds: 0,
      allowedOrigins: ['example.com'],
      creator: 'creator-id_abcde12345',
      maxDurationSeconds: 1,
      requireSignedURLs: true,
      thumbnailTimestampPct: 0.529241,
      watermark: { uid: 'ea95132c15732412d22c1476fa83f27a' },
    });
  });
});
