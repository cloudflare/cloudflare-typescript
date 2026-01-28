// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource records', () => {
  test('list: only required params', async () => {
    const responsePromise = client.dns.records.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.dns.records.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      comment: {
        absent: 'absent',
        contains: 'ello, worl',
        endswith: 'o, world',
        exact: 'Hello, world',
        present: 'present',
        startswith: 'Hello, w',
      },
      content: {
        contains: '7.0.0.',
        endswith: '.0.1',
        exact: '127.0.0.1',
        startswith: '127.0.',
      },
      direction: 'asc',
      match: 'any',
      name: {
        contains: 'w.example.',
        endswith: '.example.com',
        exact: 'www.example.com',
        startswith: 'www.example',
      },
      order: 'type',
      page: 1,
      per_page: 5,
      proxied: true,
      search: 'www.cloudflare.com',
      tag: {
        absent: 'important',
        contains: 'greeting:ello, worl',
        endswith: 'greeting:o, world',
        exact: 'greeting:Hello, world',
        present: 'important',
        startswith: 'greeting:Hello, w',
      },
      tag_match: 'any',
      type: 'A',
    });
  });
});
