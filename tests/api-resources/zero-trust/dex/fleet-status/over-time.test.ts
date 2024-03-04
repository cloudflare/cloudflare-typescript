// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource overTime', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.zeroTrust.dex.fleetStatus.overTime.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      time_end: '2023-10-11T00:00:00Z',
      time_start: '2023-10-11T00:00:00Z',
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
    const response = await cloudflare.zeroTrust.dex.fleetStatus.overTime.list({
      account_id: '01a7362d577a6c3019a474fd6f485823',
      time_end: '2023-10-11T00:00:00Z',
      time_start: '2023-10-11T00:00:00Z',
      colo: 'SJC',
      device_id: 'cb49c27f-7f97-49c5-b6f3-f7c01ead0fd7',
    });
  });
});
