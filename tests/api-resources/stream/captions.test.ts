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

describe('resource captions', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.stream.captions.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'ea95132c15732412d22c1476fa83f27a',
      'tr',
      { file: '@/Users/kyle/Desktop/tr.vtt' },
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
    const response = await cloudflare.stream.captions.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'ea95132c15732412d22c1476fa83f27a',
      'tr',
      { file: '@/Users/kyle/Desktop/tr.vtt' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = cloudflare.stream.captions.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'ea95132c15732412d22c1476fa83f27a',
      'tr',
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
  test.skip('streamSubtitlesCaptionsListCaptionsOrSubtitles', async () => {
    const responsePromise = cloudflare.stream.captions.streamSubtitlesCaptionsListCaptionsOrSubtitles(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'ea95132c15732412d22c1476fa83f27a',
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
  test.skip('streamSubtitlesCaptionsListCaptionsOrSubtitles: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.stream.captions.streamSubtitlesCaptionsListCaptionsOrSubtitles(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'ea95132c15732412d22c1476fa83f27a',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
