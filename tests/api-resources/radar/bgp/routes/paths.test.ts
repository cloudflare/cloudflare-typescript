// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BasePaths } from 'cloudflare/resources/radar/bgp/routes/paths';
import { Routes } from 'cloudflare/resources/radar/bgp/routes/routes';

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
  resources: [BasePaths],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Routes],
});

const runTests = (client: PartialCloudflare<{ radar: { bgp: { routes: { paths: BasePaths } } } }>) => {
  test('list', async () => {
    const responsePromise = client.radar.bgp.routes.paths.list(174);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.bgp.routes.paths.list(
        174,
        {
          collector: 'route-views3',
          format: 'JSON',
          ipVersion: 'IPv4',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource paths', () => runTests(client));
describe('resource paths (tree shakable, base)', () => runTests(partialClient));
describe('resource paths (tree shakable, subresource)', () => runTests(parentPartialClient));
