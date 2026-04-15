// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Quality } from 'cloudflare/resources/radar/quality/quality';
import { BaseSpeed } from 'cloudflare/resources/radar/quality/speed/speed';

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
  resources: [BaseSpeed],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Quality],
});

const runTests = (client: PartialCloudflare<{ radar: { quality: { speed: BaseSpeed } } }>) => {
  test('histogram', async () => {
    const responsePromise = client.radar.quality.speed.histogram();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('histogram: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.quality.speed.histogram(
        {
          asn: ['string'],
          bucketSize: 0,
          continent: ['string'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          format: 'JSON',
          location: ['string'],
          metricGroup: 'BANDWIDTH',
          name: ['main_series'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('summary', async () => {
    const responsePromise = client.radar.quality.speed.summary();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('summary: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.quality.speed.summary(
        {
          asn: ['string'],
          continent: ['string'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          format: 'JSON',
          location: ['string'],
          name: ['main_series'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource speed', () => runTests(client));
describe('resource speed (tree shakable, base)', () => runTests(partialClient));
describe('resource speed (tree shakable, subresource)', () => runTests(parentPartialClient));
