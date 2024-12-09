// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource downloads', () => {
  // TODO: investigate broken test
  test.skip('get: required and optional params', async () => {
    const response = await client.zeroTrust.dex.commands.downloads.get(
      '5758fefe-ae7e-4538-a39b-1fef6abcb909',
      'filename',
      { account_id: '01a7362d577a6c3019a474fd6f485823' },
    );
  });
});
