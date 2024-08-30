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
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'account_id',
        entries: [
          { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', enabled: true },
          { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', enabled: true },
          { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', enabled: true },
        ],
      },
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
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'account_id',
        entries: [
          { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', enabled: true },
          { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', enabled: true },
          { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', enabled: true },
        ],
        allowed_match_count: 0,
        context_awareness: { enabled: true, skip: { files: true } },
        ocr_enabled: true,
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.profiles.predefined.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
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
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
  });
});
