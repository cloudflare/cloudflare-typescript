// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tracerouteTests', () => {
  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.dex.tracerouteTests.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '01a7362d577a6c3019a474fd6f485823',
        interval: 'minute',
        timeEnd: 'string',
        timeStart: 'string',
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
  test.skip('get: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.dex.tracerouteTests.get(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '01a7362d577a6c3019a474fd6f485823',
        interval: 'minute',
        timeEnd: 'string',
        timeStart: 'string',
        colo: 'string',
        deviceId: ['string', 'string', 'string'],
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('networkPath: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.dex.tracerouteTests.networkPath(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '01a7362d577a6c3019a474fd6f485823',
        deviceId: 'string',
        interval: 'minute',
        timeEnd: 'string',
        timeStart: 'string',
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
  test.skip('networkPath: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.dex.tracerouteTests.networkPath(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '01a7362d577a6c3019a474fd6f485823',
        deviceId: 'string',
        interval: 'minute',
        timeEnd: 'string',
        timeStart: 'string',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('percentiles: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.dex.tracerouteTests.percentiles(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '01a7362d577a6c3019a474fd6f485823',
        timeEnd: '2023-09-20T17:00:00Z',
        timeStart: '2023-09-20T17:00:00Z',
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
  test.skip('percentiles: required and optional params', async () => {
    const response = await cloudflare.zeroTrust.dex.tracerouteTests.percentiles(
      'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
      {
        account_id: '01a7362d577a6c3019a474fd6f485823',
        timeEnd: '2023-09-20T17:00:00Z',
        timeStart: '2023-09-20T17:00:00Z',
        colo: 'string',
        deviceId: ['string', 'string', 'string'],
      },
    );
  });
});
