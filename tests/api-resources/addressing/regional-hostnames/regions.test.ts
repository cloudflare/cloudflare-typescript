// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { RegionalHostnames } from 'cloudflare/resources/addressing/regional-hostnames/regional-hostnames';
import { BaseRegions } from 'cloudflare/resources/addressing/regional-hostnames/regions';

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
  resources: [BaseRegions],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [RegionalHostnames],
});

const runTests = (
  client: PartialCloudflare<{ addressing: { regionalHostnames: { regions: BaseRegions } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.addressing.regionalHostnames.regions.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.addressing.regionalHostnames.regions.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource regions', () => runTests(client));
describe('resource regions (tree shakable, base)', () => runTests(partialClient));
describe('resource regions (tree shakable, subresource)', () => runTests(parentPartialClient));
