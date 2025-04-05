// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource globalWARPOverride', () => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.resilience.globalWARPOverride.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      disconnect: false,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.zeroTrust.devices.resilience.globalWARPOverride.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      disconnect: false,
      justification: 'Turning off WARP for testing purposes.',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.resilience.globalWARPOverride.get({
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.zeroTrust.devices.resilience.globalWARPOverride.get({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });
});
