// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource urlScanner', () => {
  test('scan', async () => {
    const responsePromise = cloudflare.urlScanner.scan('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('scan: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cloudflare.urlScanner.scan('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  test('scan: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.urlScanner.scan(
        'string',
        {
          account_scans: true,
          asn: '13335',
          date_end: '2019-12-27T18:11:19.117Z',
          date_start: '2019-12-27T18:11:19.117Z',
          hash: 'string',
          hostname: 'example.com',
          ip: '1.1.1.1',
          is_malicious: true,
          limit: 100,
          next_cursor: 'string',
          page_asn: 'string',
          page_hostname: 'string',
          page_ip: 'string',
          page_path: 'string',
          page_url: 'string',
          path: '/samples/subresource-integrity/',
          scanId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          url: 'https://example.com/?hello',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
