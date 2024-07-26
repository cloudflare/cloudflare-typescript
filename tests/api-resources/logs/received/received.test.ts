// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource received', () => {
  test('get: only required params', async () => {
    const responsePromise = client.logs.received.get('023e105f4ecef8ad9ca31a8372d0c353', {
      end: '2018-05-20T10:01:00Z',
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
    const response = await client.logs.received.get('023e105f4ecef8ad9ca31a8372d0c353', {
      end: '2018-05-20T10:01:00Z',
      count: 1,
      fields: 'ClientIP,RayID,EdgeStartTimestamp',
      sample: 0.1,
      start: '2018-05-20T10:00:00Z',
      timestamps: 'unixnano',
    });
  });
});
