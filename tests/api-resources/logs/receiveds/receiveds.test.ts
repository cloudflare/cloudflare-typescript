// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'dev@cloudflare.com',
  apiToken: 'Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY',
  userServiceKey: 'My User Service Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource receiveds', () => {
  // skipped: tests are disabled for the time being
  test.skip('receivedGetLogsReceived: only required params', async () => {
    const responsePromise = cloudflare.logs.receiveds.receivedGetLogsReceived(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { end: '2018-05-20T10:01:00Z' },
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
  test.skip('receivedGetLogsReceived: required and optional params', async () => {
    const response = await cloudflare.logs.receiveds.receivedGetLogsReceived(
      '023e105f4ecef8ad9ca31a8372d0c353',
      {
        end: '2018-05-20T10:01:00Z',
        count: 1,
        fields: 'ClientIP,RayID,EdgeStartTimestamp',
        sample: 0.1,
        start: '2018-05-20T10:00:00Z',
        timestamps: 'unixnano',
      },
    );
  });
});
