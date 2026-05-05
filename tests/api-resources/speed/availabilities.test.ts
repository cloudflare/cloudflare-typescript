// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAvailabilities } from 'cloudflare/resources/speed/availabilities';
import { Speed } from 'cloudflare/resources/speed/speed';

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
  resources: [BaseAvailabilities],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Speed],
});

const runTests = (client: PartialCloudflare<{ speed: { availabilities: BaseAvailabilities } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.speed.availabilities.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.speed.availabilities.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
};
describe('resource availabilities', () => runTests(client));
describe('resource availabilities (tree shakable, base)', () => runTests(partialClient));
describe('resource availabilities (tree shakable, subresource)', () => runTests(parentPartialClient));
