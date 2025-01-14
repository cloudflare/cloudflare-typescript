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
    const responsePromise = client.radar.email.security.summary.arc();
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
      client.radar.email.security.summary.arc({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('arc: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.security.summary.arc(
        {
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dkim: ['PASS'],
          dmarc: ['PASS'],
          format: 'JSON',
          name: ['string'],
          spf: ['PASS'],
          tlsVersion: ['TLSv1_0'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('dkim', async () => {
    const responsePromise = client.radar.email.security.summary.dkim();
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
      client.radar.email.security.summary.dkim({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('dkim: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.security.summary.dkim(
        {
          arc: ['PASS'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dmarc: ['PASS'],
          format: 'JSON',
          name: ['string'],
          spf: ['PASS'],
          tlsVersion: ['TLSv1_0'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('dmarc', async () => {
    const responsePromise = client.radar.email.security.summary.dmarc();
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
      client.radar.email.security.summary.dmarc({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('dmarc: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.security.summary.dmarc(
        {
          arc: ['PASS'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dkim: ['PASS'],
          format: 'JSON',
          name: ['string'],
          spf: ['PASS'],
          tlsVersion: ['TLSv1_0'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('malicious', async () => {
    const responsePromise = client.radar.email.security.summary.malicious();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('malicious: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.security.summary.malicious({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('malicious: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.security.summary.malicious(
        {
          arc: ['PASS'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dkim: ['PASS'],
          dmarc: ['PASS'],
          format: 'JSON',
          name: ['string'],
          spf: ['PASS'],
          tlsVersion: ['TLSv1_0'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('spam', async () => {
    const responsePromise = client.radar.email.security.summary.spam();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('spam: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.security.summary.spam({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('spam: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.security.summary.spam(
        {
          arc: ['PASS'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dkim: ['PASS'],
          dmarc: ['PASS'],
          format: 'JSON',
          name: ['string'],
          spf: ['PASS'],
          tlsVersion: ['TLSv1_0'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('spf', async () => {
    const responsePromise = client.radar.email.security.summary.spf();
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
      client.radar.email.security.summary.spf({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('spf: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.security.summary.spf(
        {
          arc: ['PASS'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dkim: ['PASS'],
          dmarc: ['PASS'],
          format: 'JSON',
          name: ['string'],
          tlsVersion: ['TLSv1_0'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('spoof', async () => {
    const responsePromise = client.radar.email.security.summary.spoof();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('spoof: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.security.summary.spoof({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('spoof: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.security.summary.spoof(
        {
          arc: ['PASS'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dkim: ['PASS'],
          dmarc: ['PASS'],
          format: 'JSON',
          name: ['string'],
          spf: ['PASS'],
          tlsVersion: ['TLSv1_0'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('threatCategory', async () => {
    const responsePromise = client.radar.email.security.summary.threatCategory();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('threatCategory: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.security.summary.threatCategory({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('threatCategory: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.security.summary.threatCategory(
        {
          arc: ['PASS'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dkim: ['PASS'],
          dmarc: ['PASS'],
          format: 'JSON',
          name: ['string'],
          spf: ['PASS'],
          tlsVersion: ['TLSv1_0'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('tlsVersion', async () => {
    const responsePromise = client.radar.email.security.summary.tlsVersion();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('tlsVersion: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.security.summary.tlsVersion({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('tlsVersion: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.email.security.summary.tlsVersion(
        {
          arc: ['PASS'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dkim: ['PASS'],
          dmarc: ['PASS'],
          format: 'JSON',
          name: ['string'],
          spf: ['PASS'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
