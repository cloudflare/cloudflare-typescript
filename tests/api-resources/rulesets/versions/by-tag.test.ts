// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource byTag', () => {
  test('get: only required params', async () => {
    const responsePromise = client.rulesets.versions.byTag.get(
      '2f2feab2026849078ba485f918791bdc',
      '1',
      'directory-traversal',
      { account_id: 'abf9b32d38c5f572afde3336ec0ce302' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.rulesets.versions.byTag.get(
      '2f2feab2026849078ba485f918791bdc',
      '1',
      'directory-traversal',
      { account_id: 'abf9b32d38c5f572afde3336ec0ce302' },
    );
  });
});
