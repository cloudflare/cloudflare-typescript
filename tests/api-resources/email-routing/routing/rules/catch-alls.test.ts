// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource catchAlls', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.emailRouting.routing.rules.catchAlls.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        actions: [{ type: 'forward' }, { type: 'forward' }, { type: 'forward' }],
        matchers: [{ type: 'all' }, { type: 'all' }, { type: 'all' }],
      },
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
    const response = await cloudflare.emailRouting.routing.rules.catchAlls.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        actions: [
          {
            type: 'forward',
            value: [
              'destinationaddress@example.net',
              'destinationaddress@example.net',
              'destinationaddress@example.net',
            ],
          },
          {
            type: 'forward',
            value: [
              'destinationaddress@example.net',
              'destinationaddress@example.net',
              'destinationaddress@example.net',
            ],
          },
          {
            type: 'forward',
            value: [
              'destinationaddress@example.net',
              'destinationaddress@example.net',
              'destinationaddress@example.net',
            ],
          },
        ],
        matchers: [{ type: 'all' }, { type: 'all' }, { type: 'all' }],
        enabled: true,
        name: 'Send to user@example.net rule.',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.emailRouting.routing.rules.catchAlls.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
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
      cloudflare.emailRouting.routing.rules.catchAlls.get('023e105f4ecef8ad9ca31a8372d0c353', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
