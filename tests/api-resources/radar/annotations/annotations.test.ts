// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Radar } from 'cloudflare/resources/radar/radar';
import { BaseAnnotations } from 'cloudflare/resources/radar/annotations/annotations';

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
  resources: [BaseAnnotations],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Radar],
});

const runTests = (client: PartialCloudflare<{ radar: { annotations: BaseAnnotations } }>) => {
  test('list', async () => {
    const responsePromise = client.radar.annotations.list();
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
      client.radar.annotations.list(
        {
          asn: 174,
          dataSource: 'ALL',
          dateEnd: '2023-09-01T11:41:33.782Z',
          dateRange: '7d',
          dateStart: '2023-09-01T11:41:33.782Z',
          eventType: 'OUTAGE',
          format: 'JSON',
          limit: 1,
          location: 'US',
          offset: 0,
          origin: 'amazon-us-east-1',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
};
describe('resource annotations', () => runTests(client));
describe('resource annotations (tree shakable, base)', () => runTests(partialClient));
describe('resource annotations (tree shakable, subresource)', () => runTests(parentPartialClient));
