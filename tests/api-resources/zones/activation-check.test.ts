// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseActivationCheck } from 'cloudflare/resources/zones/activation-check';
import { Zones } from 'cloudflare/resources/zones/zones';

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
  resources: [BaseActivationCheck],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Zones],
});

const runTests = (client: PartialCloudflare<{ zones: { activationCheck: BaseActivationCheck } }>) => {
  test('trigger: only required params', async () => {
    const responsePromise = client.zones.activationCheck.trigger({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('trigger: required and optional params', async () => {
    const response = await client.zones.activationCheck.trigger({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource activationCheck', () => runTests(client));
describe('resource activationCheck (tree shakable, base)', () => runTests(partialClient));
describe('resource activationCheck (tree shakable, subresource)', () => runTests(parentPartialClient));
