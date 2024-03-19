// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource cache', () => {
  // skipped: tests are disabled for the time being
  test.skip('purge: only required params', async () => {
    const responsePromise = cloudflare.cache.purge({ zone_id: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('purge: required and optional params', async () => {
    const response = await cloudflare.cache.purge({
      zone_id: 'string',
      files: [
        'http://www.example.com/css/styles.css',
        'http://www.example.com/css/styles.css',
        'http://www.example.com/css/styles.css',
      ],
      hosts: ['www.example.com', 'images.example.com'],
      prefixes: ['www.example.com/foo', 'images.example.com/bar/baz'],
      purge_everything: true,
      tags: ['some-tag', 'another-tag'],
    });
  });
});
