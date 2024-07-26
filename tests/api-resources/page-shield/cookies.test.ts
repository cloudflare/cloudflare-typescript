// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cookies', () => {
  test('list: only required params', async () => {
    const responsePromise = client.pageShield.cookies.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.pageShield.cookies.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'asc',
      domain: 'example.com',
      export: 'csv',
      hosts: 'blog.cloudflare.com,www.example*,*cloudflare.com',
      http_only: true,
      name: 'session_id',
      order_by: 'first_seen_at',
      page: '2',
      page_url: 'example.com/page,*/checkout,example.com/*,*checkout*',
      path: '/',
      per_page: 100,
      same_site: 'strict',
      secure: true,
      type: 'first_party',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.pageShield.cookies.get('023e105f4ecef8ad9ca31a8372d0c353', {
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

  test('get: required and optional params', async () => {
    const response = await client.pageShield.cookies.get('023e105f4ecef8ad9ca31a8372d0c353', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
