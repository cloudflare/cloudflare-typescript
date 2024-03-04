// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource downloads', () => {
  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.pcaps.downloads.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
