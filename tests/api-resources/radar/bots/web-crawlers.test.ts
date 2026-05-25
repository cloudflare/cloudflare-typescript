// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Bots } from 'cloudflare/resources/radar/bots/bots';
import { BaseWebCrawlers } from 'cloudflare/resources/radar/bots/web-crawlers';

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
  resources: [BaseWebCrawlers],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Bots],
});

const runTests = (client: PartialCloudflare<{ radar: { bots: { webCrawlers: BaseWebCrawlers } } }>) => {
  test('summary', async () => {
    const responsePromise = client.radar.bots.webCrawlers.summary('CLIENT_TYPE');
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
      client.radar.bots.webCrawlers.summary(
        'CLIENT_TYPE',
        {
          botOperator: ['string'],
          clientType: ['HUMAN'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          format: 'JSON',
          industry: ['string'],
          limitPerGroup: 10,
          name: ['main_series'],
          responseStatus: ['string'],
          responseStatusCategory: ['INFORMATIONAL'],
          vertical: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('timeseriesGroups', async () => {
    const responsePromise = client.radar.bots.webCrawlers.timeseriesGroups('CLIENT_TYPE');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('timeseriesGroups: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.bots.webCrawlers.timeseriesGroups(
        'CLIENT_TYPE',
        {
          aggInterval: '1h',
          botOperator: ['string'],
          clientType: ['HUMAN'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          format: 'JSON',
          industry: ['string'],
          limitPerGroup: 10,
          name: ['main_series'],
          normalization: 'PERCENTAGE',
          responseStatus: ['string'],
          responseStatusCategory: ['INFORMATIONAL'],
          vertical: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource webCrawlers', () => runTests(client));
describe('resource webCrawlers (tree shakable, base)', () => runTests(partialClient));
describe('resource webCrawlers (tree shakable, subresource)', () => runTests(parentPartialClient));
