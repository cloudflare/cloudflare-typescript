// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Radar } from 'cloudflare/resources/radar/radar';
import { BaseDNS } from 'cloudflare/resources/radar/dns/dns';

import Cloudflare from 'cloudflare';
import { createClient, type PartialCloudflare } from 'cloudflare/tree-shakable';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseDNS],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Radar],
});

const runTests = (client: PartialCloudflare<{ radar: { dns: BaseDNS } }>) => {
  test('summaryV2', async () => {
    const responsePromise = client.radar.dns.summaryV2('AS');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('summaryV2: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.dns.summaryV2(
        'AS',
        {
          asn: ['string'],
          cacheHit: [true],
          continent: ['string'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dnssec: ['INVALID'],
          dnssecAware: ['SUPPORTED'],
          dnssecE2e: [true],
          format: 'JSON',
          ipVersion: ['IPv4'],
          limitPerGroup: 10,
          location: ['string'],
          matchingAnswer: [true],
          name: ['main_series'],
          nodata: [true],
          protocol: ['UDP'],
          queryType: ['A'],
          responseCode: ['NOERROR'],
          responseTtl: ['LTE_1M'],
          tld: ['com'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('timeseries', async () => {
    const responsePromise = client.radar.dns.timeseries();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('timeseries: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.dns.timeseries(
        {
          aggInterval: '1h',
          asn: ['string'],
          cacheHit: [true],
          continent: ['string'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dnssec: ['INVALID'],
          dnssecAware: ['SUPPORTED'],
          dnssecE2e: [true],
          format: 'JSON',
          ipVersion: ['IPv4'],
          location: ['string'],
          matchingAnswer: [true],
          name: ['main_series'],
          nodata: [true],
          protocol: ['UDP'],
          queryType: ['A'],
          responseCode: ['NOERROR'],
          responseTtl: ['LTE_1M'],
          tld: ['com'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('timeseriesGroupsV2', async () => {
    const responsePromise = client.radar.dns.timeseriesGroupsV2('AS');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('timeseriesGroupsV2: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.dns.timeseriesGroupsV2(
        'AS',
        {
          aggInterval: '1h',
          asn: ['string'],
          cacheHit: [true],
          continent: ['string'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          dnssec: ['INVALID'],
          dnssecAware: ['SUPPORTED'],
          dnssecE2e: [true],
          format: 'JSON',
          ipVersion: ['IPv4'],
          limitPerGroup: 10,
          location: ['string'],
          matchingAnswer: [true],
          name: ['main_series'],
          nodata: [true],
          normalization: 'PERCENTAGE',
          protocol: ['UDP'],
          queryType: ['A'],
          responseCode: ['NOERROR'],
          responseTtl: ['LTE_1M'],
          tld: ['com'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource dns', () => runTests(client));
describe('resource dns (tree shakable, base)', () => runTests(partialClient));
describe('resource dns (tree shakable, subresource)', () => runTests(parentPartialClient));
