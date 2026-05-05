// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Configs } from 'cloudflare/resources/magic-network-monitoring/configs/configs';
import { BaseFull } from 'cloudflare/resources/magic-network-monitoring/configs/full';

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
  resources: [BaseFull],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Configs],
});

const runTests = (client: PartialCloudflare<{ magicNetworkMonitoring: { configs: { full: BaseFull } } }>) => {
  test('get: only required params', async () => {
    const responsePromise = client.magicNetworkMonitoring.configs.full.get({
      account_id: '6f91088a406011ed95aed352566e8d4c',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.magicNetworkMonitoring.configs.full.get({
      account_id: '6f91088a406011ed95aed352566e8d4c',
    });
  });
};
describe('resource full', () => runTests(client));
describe('resource full (tree shakable, base)', () => runTests(partialClient));
describe('resource full (tree shakable, subresource)', () => runTests(parentPartialClient));
