// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { DNS } from 'cloudflare/resources/radar/dns/dns';
import { BaseTop } from 'cloudflare/resources/radar/dns/top';

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
  resources: [BaseTop],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [DNS],
});

const runTests = (client: PartialCloudflare<{ radar: { dns: { top: BaseTop } } }>) => {
  test('ases', async () => {
    const responsePromise = client.radar.dns.top.ases();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('ases: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.dns.top.ases(
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
          domain: ['google.com'],
          format: 'JSON',
          ipVersion: ['IPv4'],
          limit: 1,
          location: ['string'],
          matchingAnswer: [true],
          name: ['main_series'],
          nodata: [true],
          protocol: ['UDP'],
          queryType: ['A'],
          responseCode: ['NOERROR'],
          responseTtl: ['LTE_1M'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('locations', async () => {
    const responsePromise = client.radar.dns.top.locations();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('locations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.dns.top.locations(
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
          domain: ['google.com'],
          format: 'JSON',
          ipVersion: ['IPv4'],
          limit: 1,
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
};
describe('resource top', () => runTests(client));
describe('resource top (tree shakable, base)', () => runTests(partialClient));
describe('resource top (tree shakable, subresource)', () => runTests(parentPartialClient));
