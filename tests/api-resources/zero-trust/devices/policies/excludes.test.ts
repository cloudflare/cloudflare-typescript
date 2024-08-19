// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource excludes', () => {
  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.policies.excludes.update({
      account_id: '699d98642c564d2e855e9661899b7252',
      body: [
        { address: '192.0.2.0/24', description: 'Exclude testing domains from the tunnel' },
        { address: '192.0.2.0/24', description: 'Exclude testing domains from the tunnel' },
        { address: '192.0.2.0/24', description: 'Exclude testing domains from the tunnel' },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.zeroTrust.devices.policies.excludes.update({
      account_id: '699d98642c564d2e855e9661899b7252',
      body: [
        {
          address: '192.0.2.0/24',
          description: 'Exclude testing domains from the tunnel',
          host: '*.example.com',
        },
        {
          address: '192.0.2.0/24',
          description: 'Exclude testing domains from the tunnel',
          host: '*.example.com',
        },
        {
          address: '192.0.2.0/24',
          description: 'Exclude testing domains from the tunnel',
          host: '*.example.com',
        },
      ],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.policies.excludes.list({
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

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.devices.policies.excludes.list({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.devices.policies.excludes.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
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
    const response = await client.zeroTrust.devices.policies.excludes.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
  });
});
