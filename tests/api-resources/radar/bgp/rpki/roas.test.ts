// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseRoas } from 'cloudflare/resources/radar/bgp/rpki/roas';
import { RPKI } from 'cloudflare/resources/radar/bgp/rpki/rpki';

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
  resources: [BaseRoas],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [RPKI],
});

const runTests = (client: PartialCloudflare<{ radar: { bgp: { rpki: { roas: BaseRoas } } } }>) => {
  test('timeseries', async () => {
    const responsePromise = client.radar.bgp.rpki.roas.timeseries();
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
      client.radar.bgp.rpki.roas.timeseries(
        {
          asn: ['string'],
          dateEnd: '2023-09-01T11:41:33.782Z',
          dateStart: '2023-09-01T11:41:33.782Z',
          format: 'JSON',
          location: ['string'],
          metric: 'validPfxsRatio',
          name: ['main_series'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource roas', () => runTests(client));
describe('resource roas (tree shakable, base)', () => runTests(partialClient));
describe('resource roas (tree shakable, subresource)', () => runTests(parentPartialClient));
