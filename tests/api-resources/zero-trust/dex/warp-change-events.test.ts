// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource warpChangeEvents', () => {
  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.dex.warpChangeEvents.get({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      from: '2023-09-20T17:00:00Z',
      page: 1,
      per_page: 1,
      to: '2023-09-20T17:00:00Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zeroTrust.dex.warpChangeEvents.get({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      from: '2023-09-20T17:00:00Z',
      page: 1,
      per_page: 1,
      to: '2023-09-20T17:00:00Z',
      account_name: 'Myorg',
      config_name: 'MASQUE',
      sort_order: 'ASC',
      toggle: 'on',
      type: 'config',
    });
  });
});
