// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Radar } from 'cloudflare/resources/radar/radar';
import { BaseRanking } from 'cloudflare/resources/radar/ranking/ranking';

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
  resources: [BaseRanking],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Radar],
});

const runTests = (client: PartialCloudflare<{ radar: { ranking: BaseRanking } }>) => {
  test('timeseriesGroups', async () => {
    const responsePromise = client.radar.ranking.timeseriesGroups();
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
      client.radar.ranking.timeseriesGroups(
        {
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          domainCategory: ['string'],
          domains: ['google.com'],
          format: 'JSON',
          limit: 1,
          location: ['string'],
          name: ['main_series'],
          rankingType: 'POPULAR',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('top', async () => {
    const responsePromise = client.radar.ranking.top();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('top: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.ranking.top(
        {
          date: ['2019-12-27'],
          domainCategory: ['string'],
          format: 'JSON',
          limit: 5,
          location: ['string'],
          name: ['main_series'],
          rankingType: 'POPULAR',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource ranking', () => runTests(client));
describe('resource ranking (tree shakable, base)', () => runTests(partialClient));
describe('resource ranking (tree shakable, subresource)', () => runTests(parentPartialClient));
