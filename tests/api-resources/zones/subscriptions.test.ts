// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseSubscriptions } from 'cloudflare/resources/zones/subscriptions';
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
  resources: [BaseSubscriptions],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Zones],
});

const runTests = (client: PartialCloudflare<{ zones: { subscriptions: BaseSubscriptions } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.zones.subscriptions.create({
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

  test('create: required and optional params', async () => {
    const response = await client.zones.subscriptions.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      frequency: 'monthly',
      rate_plan: {
        id: 'free',
        currency: 'USD',
        externally_managed: false,
        is_contract: false,
        public_name: 'Business Plan',
        scope: 'zone',
        sets: ['string'],
      },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.zones.subscriptions.update({
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

  test('update: required and optional params', async () => {
    const response = await client.zones.subscriptions.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      frequency: 'monthly',
      rate_plan: {
        id: 'free',
        currency: 'USD',
        externally_managed: false,
        is_contract: false,
        public_name: 'Business Plan',
        scope: 'zone',
        sets: ['string'],
      },
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.zones.subscriptions.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.zones.subscriptions.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
};
describe('resource subscriptions', () => runTests(client));
describe('resource subscriptions (tree shakable, base)', () => runTests(partialClient));
describe('resource subscriptions (tree shakable, subresource)', () => runTests(parentPartialClient));
