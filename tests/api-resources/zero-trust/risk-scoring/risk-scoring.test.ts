// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource riskScoring', () => {
  test('get', async () => {
    const responsePromise = client.zeroTrust.riskScoring.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'f2108713-1206-4e84-8b80-0e71a6a1c67b',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.zeroTrust.riskScoring.get(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'f2108713-1206-4e84-8b80-0e71a6a1c67b',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.zeroTrust.riskScoring.get(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'f2108713-1206-4e84-8b80-0e71a6a1c67b',
        { direction: 'desc', order_by: 'timestamp', page: 0, per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('reset', async () => {
    const responsePromise = client.zeroTrust.riskScoring.reset(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'f2108713-1206-4e84-8b80-0e71a6a1c67b',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('reset: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.zeroTrust.riskScoring.reset(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'f2108713-1206-4e84-8b80-0e71a6a1c67b',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
