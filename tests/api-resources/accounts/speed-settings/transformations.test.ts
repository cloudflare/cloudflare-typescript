// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { SpeedSettings } from 'cloudflare/resources/accounts/speed-settings/speed-settings';
import { BaseTransformations } from 'cloudflare/resources/accounts/speed-settings/transformations';

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
  resources: [BaseTransformations],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [SpeedSettings],
});

const runTests = (
  client: PartialCloudflare<{ accounts: { speedSettings: { transformations: BaseTransformations } } }>,
) => {
  test('get: only required params', async () => {
    const responsePromise = client.accounts.speedSettings.transformations.get({
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
    const response = await client.accounts.speedSettings.transformations.get({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource transformations', () => runTests(client));
describe('resource transformations (tree shakable, base)', () => runTests(partialClient));
describe('resource transformations (tree shakable, subresource)', () => runTests(parentPartialClient));
