// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource bgp', () => {
  test('timeseries', async () => {
    const responsePromise = client.radar.bgp.timeseries();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('timeseries: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.radar.bgp.timeseries({ path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('timeseries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.radar.bgp.timeseries({ aggInterval: '15m', asn: ['string', 'string', 'string'], dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'], dateRange: ['7d', '7d', '7d'], dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'], format: 'JSON', name: ['string', 'string', 'string'], prefix: ['1.1.1.0/24', '1.1.1.0/24', '1.1.1.0/24'], updateType: ['ANNOUNCEMENT', 'WITHDRAWAL'] }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });
});
