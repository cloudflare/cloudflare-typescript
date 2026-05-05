// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseConfigs } from 'cloudflare/resources/zaraz/history/configs';
import { History } from 'cloudflare/resources/zaraz/history/history';

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
  resources: [BaseConfigs],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [History],
});

const runTests = (client: PartialCloudflare<{ zaraz: { history: { configs: BaseConfigs } } }>) => {
  test('get: only required params', async () => {
    const responsePromise = client.zaraz.history.configs.get({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      ids: [0],
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
    const response = await client.zaraz.history.configs.get({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      ids: [0],
    });
  });
};
describe('resource configs', () => runTests(client));
describe('resource configs (tree shakable, base)', () => runTests(partialClient));
describe('resource configs (tree shakable, subresource)', () => runTests(parentPartialClient));
