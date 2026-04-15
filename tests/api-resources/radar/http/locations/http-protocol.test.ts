// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseHTTPProtocol } from 'cloudflare/resources/radar/http/locations/http-protocol';
import { Locations } from 'cloudflare/resources/radar/http/locations/locations';

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
  resources: [BaseHTTPProtocol],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Locations],
});

const runTests = (
  client: PartialCloudflare<{ radar: { http: { locations: { httpProtocol: BaseHTTPProtocol } } } }>,
) => {
  test('get', async () => {
    const responsePromise = client.radar.http.locations.httpProtocol.get('HTTP');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.http.locations.httpProtocol.get(
        'HTTP',
        {
          asn: ['string'],
          botClass: ['LIKELY_AUTOMATED'],
          browserFamily: ['CHROME'],
          continent: ['string'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          deviceType: ['DESKTOP'],
          format: 'JSON',
          geoId: ['string'],
          httpVersion: ['HTTPv1'],
          ipVersion: ['IPv4'],
          limit: 1,
          location: ['string'],
          name: ['main_series'],
          os: ['WINDOWS'],
          tlsVersion: ['TLSv1_0'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource httpProtocol', () => runTests(client));
describe('resource httpProtocol (tree shakable, base)', () => runTests(partialClient));
describe('resource httpProtocol (tree shakable, subresource)', () => runTests(parentPartialClient));
