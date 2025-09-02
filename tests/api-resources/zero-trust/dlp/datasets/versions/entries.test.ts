// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entries', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.zeroTrust.dlp.datasets.versions.entries.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      0,
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      await toFile(Buffer.from('# my file contents'), 'README.md'),
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

  // TODO: investigate broken test
  test.skip('create: required and optional params', async () => {
    const response = await client.zeroTrust.dlp.datasets.versions.entries.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      0,
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      await toFile(Buffer.from('# my file contents'), 'README.md'),
      { account_id: 'account_id' },
    );
  });
});
