// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scripts', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.pageShield.scripts.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.pageShield.scripts.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.pageShield.scripts.get('c9ef84a6bf5e47138c75d95e2f933e8f', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.pageShield.scripts.get('c9ef84a6bf5e47138c75d95e2f933e8f', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
