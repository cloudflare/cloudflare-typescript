// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource summary', () => {
  test('botClass', async () => {
    const responsePromise = client.radar.http.summary.botClass();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('botClass: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.radar.http.summary.botClass({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  test('botClass: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.http.summary.botClass(
        {
          asn: ['string', 'string', 'string'],
          continent: ['string', 'string', 'string'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          deviceType: ['DESKTOP', 'MOBILE', 'OTHER'],
          format: 'JSON',
          httpProtocol: ['HTTP', 'HTTPS'],
          httpVersion: ['HTTPv1', 'HTTPv2', 'HTTPv3'],
          ipVersion: ['IPv4', 'IPv6'],
          location: ['string', 'string', 'string'],
          name: ['string', 'string', 'string'],
          os: ['WINDOWS', 'MACOSX', 'IOS'],
          tlsVersion: ['TLSv1_0', 'TLSv1_1', 'TLSv1_2'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('deviceType', async () => {
    const responsePromise = client.radar.http.summary.deviceType();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deviceType: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.radar.http.summary.deviceType({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  test('deviceType: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.http.summary.deviceType(
        {
          asn: ['string', 'string', 'string'],
          botClass: ['LIKELY_AUTOMATED', 'LIKELY_HUMAN'],
          continent: ['string', 'string', 'string'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          format: 'JSON',
          httpProtocol: ['HTTP', 'HTTPS'],
          httpVersion: ['HTTPv1', 'HTTPv2', 'HTTPv3'],
          ipVersion: ['IPv4', 'IPv6'],
          location: ['string', 'string', 'string'],
          name: ['string', 'string', 'string'],
          os: ['WINDOWS', 'MACOSX', 'IOS'],
          tlsVersion: ['TLSv1_0', 'TLSv1_1', 'TLSv1_2'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('httpProtocol', async () => {
    const responsePromise = client.radar.http.summary.httpProtocol();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('httpProtocol: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.http.summary.httpProtocol({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('httpProtocol: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.http.summary.httpProtocol(
        {
          asn: ['string', 'string', 'string'],
          botClass: ['LIKELY_AUTOMATED', 'LIKELY_HUMAN'],
          continent: ['string', 'string', 'string'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          deviceType: ['DESKTOP', 'MOBILE', 'OTHER'],
          format: 'JSON',
          httpVersion: ['HTTPv1', 'HTTPv2', 'HTTPv3'],
          ipVersion: ['IPv4', 'IPv6'],
          location: ['string', 'string', 'string'],
          name: ['string', 'string', 'string'],
          os: ['WINDOWS', 'MACOSX', 'IOS'],
          tlsVersion: ['TLSv1_0', 'TLSv1_1', 'TLSv1_2'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('httpVersion', async () => {
    const responsePromise = client.radar.http.summary.httpVersion();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('httpVersion: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.radar.http.summary.httpVersion({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  test('httpVersion: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.http.summary.httpVersion(
        {
          asn: ['string', 'string', 'string'],
          botClass: ['LIKELY_AUTOMATED', 'LIKELY_HUMAN'],
          continent: ['string', 'string', 'string'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          deviceType: ['DESKTOP', 'MOBILE', 'OTHER'],
          format: 'JSON',
          httpProtocol: ['HTTP', 'HTTPS'],
          ipVersion: ['IPv4', 'IPv6'],
          location: ['string', 'string', 'string'],
          name: ['string', 'string', 'string'],
          os: ['WINDOWS', 'MACOSX', 'IOS'],
          tlsVersion: ['TLSv1_0', 'TLSv1_1', 'TLSv1_2'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('ipVersion', async () => {
    const responsePromise = client.radar.http.summary.ipVersion();
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
    await expect(client.radar.http.summary.ipVersion({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  test('ipVersion: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.http.summary.ipVersion(
        {
          asn: ['string', 'string', 'string'],
          botClass: ['LIKELY_AUTOMATED', 'LIKELY_HUMAN'],
          continent: ['string', 'string', 'string'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          deviceType: ['DESKTOP', 'MOBILE', 'OTHER'],
          format: 'JSON',
          httpProtocol: ['HTTP', 'HTTPS'],
          httpVersion: ['HTTPv1', 'HTTPv2', 'HTTPv3'],
          location: ['string', 'string', 'string'],
          name: ['string', 'string', 'string'],
          os: ['WINDOWS', 'MACOSX', 'IOS'],
          tlsVersion: ['TLSv1_0', 'TLSv1_1', 'TLSv1_2'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('os', async () => {
    const responsePromise = client.radar.http.summary.os();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('os: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.radar.http.summary.os({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  test('os: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.http.summary.os(
        {
          asn: ['string', 'string', 'string'],
          botClass: ['LIKELY_AUTOMATED', 'LIKELY_HUMAN'],
          continent: ['string', 'string', 'string'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          deviceType: ['DESKTOP', 'MOBILE', 'OTHER'],
          format: 'JSON',
          httpProtocol: ['HTTP', 'HTTPS'],
          httpVersion: ['HTTPv1', 'HTTPv2', 'HTTPv3'],
          ipVersion: ['IPv4', 'IPv6'],
          location: ['string', 'string', 'string'],
          name: ['string', 'string', 'string'],
          tlsVersion: ['TLSv1_0', 'TLSv1_1', 'TLSv1_2'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('postQuantum', async () => {
    const responsePromise = client.radar.http.summary.postQuantum();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('postQuantum: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.radar.http.summary.postQuantum({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  test('postQuantum: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.http.summary.postQuantum(
        {
          asn: ['string', 'string', 'string'],
          botClass: ['LIKELY_AUTOMATED', 'LIKELY_HUMAN'],
          continent: ['string', 'string', 'string'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          deviceType: ['DESKTOP', 'MOBILE', 'OTHER'],
          format: 'JSON',
          httpProtocol: ['HTTP', 'HTTPS'],
          httpVersion: ['HTTPv1', 'HTTPv2', 'HTTPv3'],
          ipVersion: ['IPv4', 'IPv6'],
          location: ['string', 'string', 'string'],
          name: ['string', 'string', 'string'],
          os: ['WINDOWS', 'MACOSX', 'IOS'],
          tlsVersion: ['TLSv1_0', 'TLSv1_1', 'TLSv1_2'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('tlsVersion', async () => {
    const responsePromise = client.radar.http.summary.tlsVersion();
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
    await expect(client.radar.http.summary.tlsVersion({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  test('tlsVersion: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.http.summary.tlsVersion(
        {
          asn: ['string', 'string', 'string'],
          botClass: ['LIKELY_AUTOMATED', 'LIKELY_HUMAN'],
          continent: ['string', 'string', 'string'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['7d', '7d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          deviceType: ['DESKTOP', 'MOBILE', 'OTHER'],
          format: 'JSON',
          httpProtocol: ['HTTP', 'HTTPS'],
          httpVersion: ['HTTPv1', 'HTTPv2', 'HTTPv3'],
          ipVersion: ['IPv4', 'IPv6'],
          location: ['string', 'string', 'string'],
          name: ['string', 'string', 'string'],
          os: ['WINDOWS', 'MACOSX', 'IOS'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
