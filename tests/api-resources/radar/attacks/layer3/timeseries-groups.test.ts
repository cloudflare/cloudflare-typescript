// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource timeseriesGroups', () => {
  test('bitrate', async () => {
    const responsePromise = client.radar.attacks.layer3.timeseriesGroups.bitrate();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bitrate: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.attacks.layer3.timeseriesGroups.bitrate({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('bitrate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.attacks.layer3.timeseriesGroups.bitrate(
        {
          aggInterval: '15m',
          continent: ['string', 'string', 'string'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          direction: 'ORIGIN',
          format: 'JSON',
          ipVersion: ['IPv4', 'IPv6'],
          location: ['string', 'string', 'string'],
          name: ['string', 'string', 'string'],
          normalization: 'PERCENTAGE',
          protocol: ['UDP', 'TCP', 'ICMP'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('duration', async () => {
    const responsePromise = client.radar.attacks.layer3.timeseriesGroups.duration();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('duration: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.attacks.layer3.timeseriesGroups.duration({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('duration: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.attacks.layer3.timeseriesGroups.duration(
        {
          aggInterval: '15m',
          continent: ['string', 'string', 'string'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          direction: 'ORIGIN',
          format: 'JSON',
          ipVersion: ['IPv4', 'IPv6'],
          location: ['string', 'string', 'string'],
          name: ['string', 'string', 'string'],
          normalization: 'PERCENTAGE',
          protocol: ['UDP', 'TCP', 'ICMP'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.radar.attacks.layer3.timeseriesGroups.get();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.attacks.layer3.timeseriesGroups.get({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.attacks.layer3.timeseriesGroups.get(
        {
          aggInterval: '15m',
          asn: ['string', 'string', 'string'],
          continent: ['string', 'string', 'string'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          format: 'JSON',
          location: ['string', 'string', 'string'],
          name: ['string', 'string', 'string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('industry', async () => {
    const responsePromise = client.radar.attacks.layer3.timeseriesGroups.industry();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('industry: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.attacks.layer3.timeseriesGroups.industry({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('industry: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.attacks.layer3.timeseriesGroups.industry(
        {
          aggInterval: '15m',
          continent: ['string', 'string', 'string'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          direction: 'ORIGIN',
          format: 'JSON',
          ipVersion: ['IPv4', 'IPv6'],
          limitPerGroup: 4,
          location: ['string', 'string', 'string'],
          name: ['string', 'string', 'string'],
          normalization: 'PERCENTAGE',
          protocol: ['UDP', 'TCP', 'ICMP'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('ipVersion', async () => {
    const responsePromise = client.radar.attacks.layer3.timeseriesGroups.ipVersion();
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
      client.radar.attacks.layer3.timeseriesGroups.ipVersion({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('ipVersion: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.attacks.layer3.timeseriesGroups.ipVersion(
        {
          aggInterval: '15m',
          continent: ['string', 'string', 'string'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          direction: 'ORIGIN',
          format: 'JSON',
          location: ['string', 'string', 'string'],
          name: ['string', 'string', 'string'],
          normalization: 'PERCENTAGE',
          protocol: ['UDP', 'TCP', 'ICMP'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('protocol', async () => {
    const responsePromise = client.radar.attacks.layer3.timeseriesGroups.protocol();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('protocol: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.attacks.layer3.timeseriesGroups.protocol({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('protocol: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.attacks.layer3.timeseriesGroups.protocol(
        {
          aggInterval: '15m',
          continent: ['string', 'string', 'string'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          direction: 'ORIGIN',
          format: 'JSON',
          ipVersion: ['IPv4', 'IPv6'],
          location: ['string', 'string', 'string'],
          name: ['string', 'string', 'string'],
          normalization: 'PERCENTAGE',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('vector', async () => {
    const responsePromise = client.radar.attacks.layer3.timeseriesGroups.vector();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('vector: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.attacks.layer3.timeseriesGroups.vector({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('vector: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.attacks.layer3.timeseriesGroups.vector(
        {
          aggInterval: '15m',
          continent: ['string', 'string', 'string'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          direction: 'ORIGIN',
          format: 'JSON',
          ipVersion: ['IPv4', 'IPv6'],
          limitPerGroup: 4,
          location: ['string', 'string', 'string'],
          name: ['string', 'string', 'string'],
          normalization: 'PERCENTAGE',
          protocol: ['UDP', 'TCP', 'ICMP'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('vertical', async () => {
    const responsePromise = client.radar.attacks.layer3.timeseriesGroups.vertical();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('vertical: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.attacks.layer3.timeseriesGroups.vertical({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('vertical: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.attacks.layer3.timeseriesGroups.vertical(
        {
          aggInterval: '15m',
          continent: ['string', 'string', 'string'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          direction: 'ORIGIN',
          format: 'JSON',
          ipVersion: ['IPv4', 'IPv6'],
          limitPerGroup: 4,
          location: ['string', 'string', 'string'],
          name: ['string', 'string', 'string'],
          normalization: 'PERCENTAGE',
          protocol: ['UDP', 'TCP', 'ICMP'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
