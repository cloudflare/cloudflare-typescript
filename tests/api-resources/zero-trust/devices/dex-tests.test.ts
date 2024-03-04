// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey:
    'v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dexTests', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.devices.dexTests.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      data: {},
      enabled: true,
      interval: '30m',
      name: 'HTTP dash health check',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.devices.dexTests.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      data: { host: 'https://dash.cloudflare.com', kind: 'http', method: 'GET' },
      enabled: true,
      interval: '30m',
      name: 'HTTP dash health check',
      description: 'Checks the dash endpoint every 30 minutes',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.devices.dexTests.update(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '699d98642c564d2e855e9661899b7252',
        data: {},
        enabled: true,
        interval: '30m',
        name: 'HTTP dash health check',
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

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.devices.dexTests.update(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '699d98642c564d2e855e9661899b7252',
        data: { host: 'https://dash.cloudflare.com', kind: 'http', method: 'GET' },
        enabled: true,
        interval: '30m',
        name: 'HTTP dash health check',
        description: 'Checks the dash endpoint every 30 minutes',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.devices.dexTests.list({
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

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.devices.dexTests.list({
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.devices.dexTests.delete(
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

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.devices.dexTests.delete(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      { account_id: '699d98642c564d2e855e9661899b7252' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.devices.dexTests.get(
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

  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.devices.dexTests.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });
});
