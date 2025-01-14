// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource summary', () => {
  test('arc', async () => {
    const responsePromise = client.radar.email.routing.summary.arc();
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
      client.radar.email.routing.summary.arc({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('arc: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.summary.arc(
        {
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dkim: ['PASS'],
          dmarc: ['PASS'],
          encrypted: ['ENCRYPTED'],
          format: 'JSON',
          ipVersion: ['IPv4'],
          name: ['string'],
          spf: ['PASS'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('dkim', async () => {
    const responsePromise = client.radar.email.routing.summary.dkim();
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
      client.radar.email.routing.summary.dkim({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('dkim: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.summary.dkim(
        {
          arc: ['PASS'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dmarc: ['PASS'],
          encrypted: ['ENCRYPTED'],
          format: 'JSON',
          ipVersion: ['IPv4'],
          name: ['string'],
          spf: ['PASS'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('dmarc', async () => {
    const responsePromise = client.radar.email.routing.summary.dmarc();
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
      client.radar.email.routing.summary.dmarc({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('dmarc: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.summary.dmarc(
        {
          arc: ['PASS'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dkim: ['PASS'],
          encrypted: ['ENCRYPTED'],
          format: 'JSON',
          ipVersion: ['IPv4'],
          name: ['string'],
          spf: ['PASS'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('encrypted', async () => {
    const responsePromise = client.radar.email.routing.summary.encrypted();
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
      client.radar.email.routing.summary.encrypted({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('encrypted: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.summary.encrypted(
        {
          arc: ['PASS'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dkim: ['PASS'],
          dmarc: ['PASS'],
          format: 'JSON',
          ipVersion: ['IPv4'],
          name: ['string'],
          spf: ['PASS'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('ipVersion', async () => {
    const responsePromise = client.radar.email.routing.summary.ipVersion();
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
      client.radar.email.routing.summary.ipVersion({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('ipVersion: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.summary.ipVersion(
        {
          arc: ['PASS'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dkim: ['PASS'],
          dmarc: ['PASS'],
          encrypted: ['ENCRYPTED'],
          format: 'JSON',
          name: ['string'],
          spf: ['PASS'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('spf', async () => {
    const responsePromise = client.radar.email.routing.summary.spf();
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
      client.radar.email.routing.summary.spf({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('spf: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.routing.summary.spf(
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
          name: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
