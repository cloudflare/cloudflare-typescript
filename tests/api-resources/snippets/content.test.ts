// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource content', () => {
  // throwing HTTP 415
  test.skip('get: required and optional params', async () => {
    const response = await client.snippets.content.get('my_snippet', {
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
    });
  });
});
