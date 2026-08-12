// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Routes } from 'cloudflare/resources/radar/bgp/routes/routes';
import { BaseUpstreams } from 'cloudflare/resources/radar/bgp/routes/upstreams';

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
  resources: [BaseUpstreams],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Routes],
});

const runTests = (
  client: PartialCloudflare<{ radar: { bgp: { routes: { upstreams: BaseUpstreams } } } }>,
) => {
  test('timeseries', async () => {
    const responsePromise = client.radar.bgp.routes.upstreams.timeseries(174);
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
      client.radar.bgp.routes.upstreams.timeseries(
        174,
        {
          dateEnd: '2023-09-01T11:41:33.782Z',
          dateStart: '2023-09-01T11:41:33.782Z',
          format: 'JSON',
          ipVersion: 'IPv4',
          limit: 5,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource upstreams', () => runTests(client));
describe('resource upstreams (tree shakable, base)', () => runTests(partialClient));
describe('resource upstreams (tree shakable, subresource)', () => runTests(parentPartialClient));
