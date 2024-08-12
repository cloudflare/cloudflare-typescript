// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource timeseriesGroups', () => {
  test('arc', async () => {
    const responsePromise = client.radar.email.routing.timeseriesGroups.arc();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('arc: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.timeseriesGroups.arc({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('arc: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.timeseriesGroups.arc(
        {
          aggInterval: '15m',
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dkim: ['PASS', 'NONE', 'FAIL'],
          dmarc: ['PASS', 'NONE', 'FAIL'],
          encrypted: ['ENCRYPTED', 'NOT_ENCRYPTED'],
          format: 'JSON',
          ipVersion: ['IPv4', 'IPv6'],
          name: ['string', 'string', 'string'],
          spf: ['PASS', 'NONE', 'FAIL'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('dkim', async () => {
    const responsePromise = client.radar.email.routing.timeseriesGroups.dkim();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('dkim: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.timeseriesGroups.dkim({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('dkim: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.timeseriesGroups.dkim(
        {
          aggInterval: '15m',
          arc: ['PASS', 'NONE', 'FAIL'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dmarc: ['PASS', 'NONE', 'FAIL'],
          encrypted: ['ENCRYPTED', 'NOT_ENCRYPTED'],
          format: 'JSON',
          ipVersion: ['IPv4', 'IPv6'],
          name: ['string', 'string', 'string'],
          spf: ['PASS', 'NONE', 'FAIL'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('dmarc', async () => {
    const responsePromise = client.radar.email.routing.timeseriesGroups.dmarc();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('dmarc: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.timeseriesGroups.dmarc({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('dmarc: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.timeseriesGroups.dmarc(
        {
          aggInterval: '15m',
          arc: ['PASS', 'NONE', 'FAIL'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dkim: ['PASS', 'NONE', 'FAIL'],
          encrypted: ['ENCRYPTED', 'NOT_ENCRYPTED'],
          format: 'JSON',
          ipVersion: ['IPv4', 'IPv6'],
          name: ['string', 'string', 'string'],
          spf: ['PASS', 'NONE', 'FAIL'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('encrypted', async () => {
    const responsePromise = client.radar.email.routing.timeseriesGroups.encrypted();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('encrypted: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.timeseriesGroups.encrypted({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('encrypted: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.timeseriesGroups.encrypted(
        {
          aggInterval: '15m',
          arc: ['PASS', 'NONE', 'FAIL'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dkim: ['PASS', 'NONE', 'FAIL'],
          dmarc: ['PASS', 'NONE', 'FAIL'],
          format: 'JSON',
          ipVersion: ['IPv4', 'IPv6'],
          name: ['string', 'string', 'string'],
          spf: ['PASS', 'NONE', 'FAIL'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('ipVersion', async () => {
    const responsePromise = client.radar.email.routing.timeseriesGroups.ipVersion();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('ipVersion: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.timeseriesGroups.ipVersion({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('ipVersion: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.timeseriesGroups.ipVersion(
        {
          aggInterval: '15m',
          arc: ['PASS', 'NONE', 'FAIL'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dkim: ['PASS', 'NONE', 'FAIL'],
          dmarc: ['PASS', 'NONE', 'FAIL'],
          encrypted: ['ENCRYPTED', 'NOT_ENCRYPTED'],
          format: 'JSON',
          name: ['string', 'string', 'string'],
          spf: ['PASS', 'NONE', 'FAIL'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('spf', async () => {
    const responsePromise = client.radar.email.routing.timeseriesGroups.spf();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('spf: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.timeseriesGroups.spf({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('spf: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.timeseriesGroups.spf(
        {
          aggInterval: '15m',
          arc: ['PASS', 'NONE', 'FAIL'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dkim: ['PASS', 'NONE', 'FAIL'],
          dmarc: ['PASS', 'NONE', 'FAIL'],
          encrypted: ['ENCRYPTED', 'NOT_ENCRYPTED'],
          format: 'JSON',
          ipVersion: ['IPv4', 'IPv6'],
          name: ['string', 'string', 'string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
