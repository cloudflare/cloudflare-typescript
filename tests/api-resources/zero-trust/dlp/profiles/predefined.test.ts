// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource predefined', () => {
  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.profiles.predefined.update(
      '384e129d-25bd-403c-8019-bc19eb7a8a5f',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.zeroTrust.dlp.profiles.predefined.update(
      '384e129d-25bd-403c-8019-bc19eb7a8a5f',
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        allowed_match_count: 5,
        context_awareness: { enabled: true, skip: { files: true } },
        entries: [{ enabled: true }, { enabled: true }, { enabled: true }],
        ocr_enabled: true,
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.profiles.predefined.get(
      '384e129d-25bd-403c-8019-bc19eb7a8a5f',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
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
    const response = await client.zeroTrust.dlp.profiles.predefined.get(
      '384e129d-25bd-403c-8019-bc19eb7a8a5f',
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
