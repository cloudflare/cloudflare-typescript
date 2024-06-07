// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource downloads', () => {
  test('get: required and optional params', async () => {
    const response = await cloudflare.addressing.loaDocuments.downloads.get(
      'd933b1530bc56c9953cf8ce166da8004',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
