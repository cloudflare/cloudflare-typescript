// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource details', () => {
  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.waitingRooms.events.details.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '699d98642c564d2e855e9661899b7252',
      '25756b2dfe6e378a06b033b670413757',
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
  test.skip('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.waitingRooms.events.details.get(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '699d98642c564d2e855e9661899b7252',
        '25756b2dfe6e378a06b033b670413757',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
