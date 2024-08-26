// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource fleetStatus', () => {
  test('live: only required params', async () => {
    const responsePromise = client.zeroTrust.dex.fleetStatus.live({ account_id: '01a7362d577a6c3019a474fd6f485823', since_minutes: 10 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('live: required and optional params', async () => {
    const response = await client.zeroTrust.dex.fleetStatus.live({ account_id: '01a7362d577a6c3019a474fd6f485823', since_minutes: 10 });
  });

  test('overTime: only required params', async () => {
    const responsePromise = client.zeroTrust.dex.fleetStatus.overTime({ account_id: '01a7362d577a6c3019a474fd6f485823', from: '2023-10-11T00:00:00Z', to: '2023-10-11T00:00:00Z' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('overTime: required and optional params', async () => {
    const response = await client.zeroTrust.dex.fleetStatus.overTime({ account_id: '01a7362d577a6c3019a474fd6f485823', from: '2023-10-11T00:00:00Z', to: '2023-10-11T00:00:00Z', colo: 'SJC', device_id: 'cb49c27f-7f97-49c5-b6f3-f7c01ead0fd7' });
  });
});
