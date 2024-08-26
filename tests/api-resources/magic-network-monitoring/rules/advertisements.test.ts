// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource advertisements', () => {
  test('edit: only required params', async () => {
    const responsePromise = client.magicNetworkMonitoring.rules.advertisements.edit('2890e6fa406311ed9b5a23f70f6fb8cf', { account_id: '6f91088a406011ed95aed352566e8d4c', body: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.magicNetworkMonitoring.rules.advertisements.edit('2890e6fa406311ed9b5a23f70f6fb8cf', { account_id: '6f91088a406011ed95aed352566e8d4c', body: {} });
  });
});
