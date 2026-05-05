// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { LeakedCredentials } from 'cloudflare/resources/radar/leaked-credentials/leaked-credentials';
import { BaseTimeseriesGroups } from 'cloudflare/resources/radar/leaked-credentials/timeseries-groups';

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
  resources: [BaseTimeseriesGroups],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [LeakedCredentials],
});

const runTests = (
  client: PartialCloudflare<{ radar: { leakedCredentials: { timeseriesGroups: BaseTimeseriesGroups } } }>,
) => {
  test('botClass', async () => {
    const responsePromise = client.radar.leakedCredentials.timeseriesGroups.botClass();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('botClass: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.leakedCredentials.timeseriesGroups.botClass(
        {
          aggInterval: '1h',
          compromised: ['CLEAN'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          format: 'JSON',
          name: ['main_series'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('compromised', async () => {
    const responsePromise = client.radar.leakedCredentials.timeseriesGroups.compromised();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('compromised: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.leakedCredentials.timeseriesGroups.compromised(
        {
          aggInterval: '1h',
          botClass: ['LIKELY_AUTOMATED'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          format: 'JSON',
          name: ['main_series'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource timeseriesGroups', () => runTests(client));
describe('resource timeseriesGroups (tree shakable, base)', () => runTests(partialClient));
describe('resource timeseriesGroups (tree shakable, subresource)', () => runTests(parentPartialClient));
