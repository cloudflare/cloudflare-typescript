// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseLocations } from 'cloudflare/resources/radar/traffic-anomalies/locations';
import { TrafficAnomalies } from 'cloudflare/resources/radar/traffic-anomalies/traffic-anomalies';

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
  resources: [BaseLocations],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [TrafficAnomalies],
});

const runTests = (
  client: PartialCloudflare<{ radar: { trafficAnomalies: { locations: BaseLocations } } }>,
) => {
  test('get', async () => {
    const responsePromise = client.radar.trafficAnomalies.locations.get();
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
      client.radar.trafficAnomalies.locations.get(
        {
          dateEnd: '2023-09-01T11:41:33.782Z',
          dateRange: '7d',
          dateStart: '2023-09-01T11:41:33.782Z',
          format: 'JSON',
          limit: 1,
          status: 'VERIFIED',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource locations', () => runTests(client));
describe('resource locations (tree shakable, base)', () => runTests(partialClient));
describe('resource locations (tree shakable, subresource)', () => runTests(parentPartialClient));
