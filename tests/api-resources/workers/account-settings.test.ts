// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAccountSettings } from 'cloudflare/resources/workers/account-settings';
import { Workers } from 'cloudflare/resources/workers/workers';

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
  resources: [BaseAccountSettings],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Workers],
});

const runTests = (client: PartialCloudflare<{ workers: { accountSettings: BaseAccountSettings } }>) => {
  test('update: only required params', async () => {
    const responsePromise = client.workers.accountSettings.update({
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

  test('update: required and optional params', async () => {
    const response = await client.workers.accountSettings.update({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      default_usage_model: 'default_usage_model',
      green_compute: true,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.workers.accountSettings.get({
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

  test('get: required and optional params', async () => {
    const response = await client.workers.accountSettings.get({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource accountSettings', () => runTests(client));
describe('resource accountSettings (tree shakable, base)', () => runTests(partialClient));
describe('resource accountSettings (tree shakable, subresource)', () => runTests(parentPartialClient));
