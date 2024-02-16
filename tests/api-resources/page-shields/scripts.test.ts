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

describe('resource scripts', () => {
  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.pageShields.scripts.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      'c9ef84a6bf5e47138c75d95e2f933e8f',
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
      cloudflare.pageShields.scripts.get(
        '023e105f4ecef8ad9ca31a8372d0c353',
        'c9ef84a6bf5e47138c75d95e2f933e8f',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('pageShieldListPageShieldScripts', async () => {
    const responsePromise = cloudflare.pageShields.scripts.pageShieldListPageShieldScripts(
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
  test.skip('pageShieldListPageShieldScripts: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.pageShields.scripts.pageShieldListPageShieldScripts('023e105f4ecef8ad9ca31a8372d0c353', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('pageShieldListPageShieldScripts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.pageShields.scripts.pageShieldListPageShieldScripts(
        '023e105f4ecef8ad9ca31a8372d0c353',
        {
          direction: 'asc',
          exclude_cdn_cgi: true,
          exclude_duplicates: true,
          exclude_urls: 'blog.cloudflare.com,www.example',
          export: 'csv',
          hosts: 'blog.cloudflare.com,www.example*,*cloudflare.com',
          order_by: 'first_seen_at',
          page: 'string',
          page_url: 'example.com/page,*/checkout,example.com/*,*checkout*',
          per_page: 100,
          prioritize_malicious: true,
          status: 'active,inactive',
          urls: 'blog.cloudflare.com,www.example',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
