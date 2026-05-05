// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseASPA } from 'cloudflare/resources/radar/bgp/rpki/aspa';
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
  resources: [BaseASPA],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [RPKI],
});

const runTests = (client: PartialCloudflare<{ radar: { bgp: { rpki: { aspa: BaseASPA } } } }>) => {
  test('changes', async () => {
    const responsePromise = client.radar.bgp.rpki.aspa.changes();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('changes: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.bgp.rpki.aspa.changes(
        {
          asn: 13335,
          dateEnd: '2023-09-01T11:41:33.782Z',
          dateStart: '2023-09-01T11:41:33.782Z',
          format: 'JSON',
          includeAsnInfo: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('snapshot', async () => {
    const responsePromise = client.radar.bgp.rpki.aspa.snapshot();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('snapshot: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.radar.bgp.rpki.aspa.snapshot(
        {
          customerAsn: 13335,
          date: '2024-09-19T00:00:00Z',
          format: 'JSON',
          includeAsnInfo: true,
          providerAsn: 174,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('timeseries', async () => {
    const responsePromise = client.radar.bgp.rpki.aspa.timeseries();
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
      client.radar.bgp.rpki.aspa.timeseries(
        {
          dateEnd: '2023-09-01T11:41:33.782Z',
          dateStart: '2023-09-01T11:41:33.782Z',
          format: 'JSON',
          location: ['string'],
          name: ['main_series'],
          rir: ['RIPE_NCC'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource aspa', () => runTests(client));
describe('resource aspa (tree shakable, base)', () => runTests(partialClient));
describe('resource aspa (tree shakable, subresource)', () => runTests(parentPartialClient));
