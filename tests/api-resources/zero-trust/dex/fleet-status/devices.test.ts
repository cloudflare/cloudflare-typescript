// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource devices', () => {
  // TODO: investigate broken test
  test.skip('list: only required params', async () => {
    const responsePromise = client.zeroTrust.dex.fleetStatus.devices.list({ account_id: '01a7362d577a6c3019a474fd6f485823', from: '2023-10-11T00:00:00Z', page: 1, per_page: 10, to: '2023-10-11T00:00:00Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('list: required and optional params', async () => {
    const response = await client.zeroTrust.dex.fleetStatus.devices.list({ account_id: '01a7362d577a6c3019a474fd6f485823', from: '2023-10-11T00:00:00Z', page: 1, per_page: 10, to: '2023-10-11T00:00:00Z', colo: 'SJC', device_id: 'cb49c27f-7f97-49c5-b6f3-f7c01ead0fd7', mode: 'proxy', platform: 'windows', sort_by: 'colo', source: 'last_seen', status: 'connected', version: '1.0.0' });
  });
});
