// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource routing', () => {
  test('summaryV2', async () => {
    const responsePromise = client.radar.email.routing.summaryV2('IP_VERSION');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('summaryV2: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.summaryV2('IP_VERSION', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('summaryV2: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.summaryV2(
        'IP_VERSION',
        {
          arc: ['PASS'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dkim: ['PASS'],
          dmarc: ['PASS'],
          encrypted: ['ENCRYPTED'],
          format: 'JSON',
          ipVersion: ['IPv4'],
          limitPerGroup: 10,
          name: ['main_series'],
          spf: ['PASS'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('timeseriesGroupsV2', async () => {
    const responsePromise = client.radar.email.routing.timeseriesGroupsV2('IP_VERSION');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('timeseriesGroupsV2: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.timeseriesGroupsV2('IP_VERSION', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('timeseriesGroupsV2: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.timeseriesGroupsV2(
        'IP_VERSION',
        {
          aggInterval: '1h',
          arc: ['PASS'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dkim: ['PASS'],
          dmarc: ['PASS'],
          encrypted: ['ENCRYPTED'],
          format: 'JSON',
          ipVersion: ['IPv4'],
          limitPerGroup: 10,
          name: ['main_series'],
          spf: ['PASS'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
