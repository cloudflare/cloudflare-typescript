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

describe('resource http', () => {
  // skipped: tests are disabled for the time being
  test.skip('botClasses', async () => {
    const responsePromise = cloudflare.radar.http.botClasses();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('botClasses: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cloudflare.radar.http.botClasses({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('botClasses: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.radar.http.botClasses(
        {
          aggInterval: '1h',
          asn: ['string', 'string', 'string'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['1d', '2d', '7d'],
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

  // skipped: tests are disabled for the time being
  test.skip('browserFamilies', async () => {
    const responsePromise = cloudflare.radar.http.browserFamilies();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('browserFamilies: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cloudflare.radar.http.browserFamilies({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('browserFamilies: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.radar.http.browserFamilies(
        {
          aggInterval: '1h',
          asn: ['string', 'string', 'string'],
          botClass: ['LIKELY_AUTOMATED', 'LIKELY_HUMAN'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['1d', '2d', '7d'],
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

  // skipped: tests are disabled for the time being
  test.skip('browsers', async () => {
    const responsePromise = cloudflare.radar.http.browsers();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('browsers: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cloudflare.radar.http.browsers({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('browsers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.radar.http.browsers(
        {
          aggInterval: '1h',
          asn: ['string', 'string', 'string'],
          botClass: ['LIKELY_AUTOMATED', 'LIKELY_HUMAN'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['1d', '2d', '7d'],
          dateStart: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          deviceType: ['DESKTOP', 'MOBILE', 'OTHER'],
          format: 'JSON',
          httpProtocol: ['HTTP', 'HTTPS'],
          httpVersion: ['HTTPv1', 'HTTPv2', 'HTTPv3'],
          ipVersion: ['IPv4', 'IPv6'],
          limitPerGroup: 4,
          location: ['string', 'string', 'string'],
          name: ['string', 'string', 'string'],
          os: ['WINDOWS', 'MACOSX', 'IOS'],
          tlsVersion: ['TLSv1_0', 'TLSv1_1', 'TLSv1_2'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('deviceTypes', async () => {
    const responsePromise = cloudflare.radar.http.deviceTypes();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('deviceTypes: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cloudflare.radar.http.deviceTypes({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('deviceTypes: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.radar.http.deviceTypes(
        {
          aggInterval: '1h',
          asn: ['string', 'string', 'string'],
          botClass: ['LIKELY_AUTOMATED', 'LIKELY_HUMAN'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['1d', '2d', '7d'],
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

  // skipped: tests are disabled for the time being
  test.skip('httpProtocols', async () => {
    const responsePromise = cloudflare.radar.http.httpProtocols();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('httpProtocols: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cloudflare.radar.http.httpProtocols({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('httpProtocols: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.radar.http.httpProtocols(
        {
          aggInterval: '1h',
          asn: ['string', 'string', 'string'],
          botClass: ['LIKELY_AUTOMATED', 'LIKELY_HUMAN'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['1d', '2d', '7d'],
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

  // skipped: tests are disabled for the time being
  test.skip('httpVersions', async () => {
    const responsePromise = cloudflare.radar.http.httpVersions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('httpVersions: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cloudflare.radar.http.httpVersions({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('httpVersions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.radar.http.httpVersions(
        {
          aggInterval: '1h',
          asn: ['string', 'string', 'string'],
          botClass: ['LIKELY_AUTOMATED', 'LIKELY_HUMAN'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['1d', '2d', '7d'],
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

  // skipped: tests are disabled for the time being
  test.skip('ipVersions', async () => {
    const responsePromise = cloudflare.radar.http.ipVersions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('ipVersions: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cloudflare.radar.http.ipVersions({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('ipVersions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.radar.http.ipVersions(
        {
          aggInterval: '1h',
          asn: ['string', 'string', 'string'],
          botClass: ['LIKELY_AUTOMATED', 'LIKELY_HUMAN'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['1d', '2d', '7d'],
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

  // skipped: tests are disabled for the time being
  test.skip('oss', async () => {
    const responsePromise = cloudflare.radar.http.oss();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('oss: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cloudflare.radar.http.oss({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Cloudflare.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('oss: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.radar.http.oss(
        {
          aggInterval: '1h',
          asn: ['string', 'string', 'string'],
          botClass: ['LIKELY_AUTOMATED', 'LIKELY_HUMAN'],
          dateEnd: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          dateRange: ['1d', '2d', '7d'],
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
});
