// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource downloads', () => {
  // TODO: address broken spotlight error - https://github.com/cloudflare/cloudflare-typescript/actions/runs/9456639475/job/26048931174?pr=498#step:5:489
  test.skip('get: required and optional params', async () => {
    const response = await client.addressing.loaDocuments.downloads.get('d933b1530bc56c9953cf8ce166da8004', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
