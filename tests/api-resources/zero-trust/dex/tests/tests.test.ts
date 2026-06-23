// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tests', () => {
  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.dex.tests.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.dex.tests.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      colo: 'SJC',
      deviceId: ['cb49c27f-7f97-49c5-b6f3-f7c01ead0fd7'],
      kind: 'http',
      page: 1,
      per_page: 10,
      registration_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      testName: 'testName',
    });
  });
});
