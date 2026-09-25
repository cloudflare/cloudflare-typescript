// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseReports } from 'cloudflare/resources/user/spectrum-analytics/zones/reports';
import { Zones } from 'cloudflare/resources/user/spectrum-analytics/zones/zones';

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
  resources: [BaseReports],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Zones],
});

const runTests = (
  client: PartialCloudflare<{ user: { spectrumAnalytics: { zones: { reports: BaseReports } } } }>,
) => {
  test('get', async () => {
    const responsePromise = client.user.spectrumAnalytics.zones.reports.get();
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
      client.user.spectrumAnalytics.zones.reports.get(
        {
          cdn_traffic: true,
          since: '2014-01-01T05:20:00.12345Z',
          until: '2014-01-01T05:20:00.12345Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource reports', () => runTests(client));
describe('resource reports (tree shakable, base)', () => runTests(partialClient));
describe('resource reports (tree shakable, subresource)', () => runTests(parentPartialClient));
