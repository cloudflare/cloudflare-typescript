// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource details', () => {
  test('get: only required params', async () => {
    const responsePromise = client.waitingRooms.events.details.get('699d98642c564d2e855e9661899b7252', '25756b2dfe6e378a06b033b670413757', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.waitingRooms.events.details.get('699d98642c564d2e855e9661899b7252', '25756b2dfe6e378a06b033b670413757', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
