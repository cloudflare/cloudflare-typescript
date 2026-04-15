// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseLocations } from 'cloudflare/resources/radar/attacks/layer3/top/locations';
import { Top } from 'cloudflare/resources/radar/attacks/layer3/top/top';

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
  resources: [Top],
});

const runTests = (
  client: PartialCloudflare<{ radar: { attacks: { layer3: { top: { locations: BaseLocations } } } } }>,
) => {
  test('origin', async () => {
    const responsePromise = client.radar.attacks.layer3.top.locations.origin();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('origin: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.attacks.layer3.top.locations.origin(
        {
          continent: ['string'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          format: 'JSON',
          ipVersion: ['IPv4'],
          limit: 1,
          location: ['string'],
          name: ['main_series'],
          protocol: ['UDP'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('target', async () => {
    const responsePromise = client.radar.attacks.layer3.top.locations.target();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('target: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.attacks.layer3.top.locations.target(
        {
          continent: ['string'],
          dateEnd: ['2019-12-27T18:11:19.117Z'],
          dateRange: ['7d'],
          dateStart: ['2019-12-27T18:11:19.117Z'],
          format: 'JSON',
          ipVersion: ['IPv4'],
          limit: 1,
          location: ['string'],
          name: ['main_series'],
          protocol: ['UDP'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource locations', () => runTests(client));
describe('resource locations (tree shakable, base)', () => runTests(partialClient));
describe('resource locations (tree shakable, subresource)', () => runTests(parentPartialClient));
