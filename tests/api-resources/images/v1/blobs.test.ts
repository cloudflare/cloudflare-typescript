// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource blobs', () => {
  // TODO: investigate broken test
  test.skip('get: required and optional params', async () => {
    const response = await client.images.v1.blobs.get('image_id', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
