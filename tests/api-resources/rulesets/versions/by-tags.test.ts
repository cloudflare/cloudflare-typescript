// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource byTags', () => {
  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.rulesets.versions.byTags.get(
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

  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.rulesets.versions.byTags.get(
      '2f2feab2026849078ba485f918791bdc',
      '1',
      'directory-traversal',
      { account_id: 'abf9b32d38c5f572afde3336ec0ce302' },
    );
  });
});
