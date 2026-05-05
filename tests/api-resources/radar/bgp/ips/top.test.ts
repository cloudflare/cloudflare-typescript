// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IPs } from 'cloudflare/resources/radar/bgp/ips/ips';
import { BaseTop } from 'cloudflare/resources/radar/bgp/ips/top';

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
  resources: [IPs],
});

const runTests = (client: PartialCloudflare<{ radar: { bgp: { ips: { top: BaseTop } } } }>) => {
  test('ases', async () => {
    const responsePromise = client.radar.bgp.ips.top.ases();
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
      client.radar.bgp.ips.top.ases(
        {
          country: 'US',
          date: '2024-09-19T00:00:00Z',
          format: 'JSON',
          limit: 5,
          metric: 'v4_24s',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource top', () => runTests(client));
describe('resource top (tree shakable, base)', () => runTests(partialClient));
describe('resource top (tree shakable, subresource)', () => runTests(parentPartialClient));
