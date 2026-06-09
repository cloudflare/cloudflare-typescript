// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseChangelog } from 'cloudflare/resources/flagship/apps/flags/changelog';
import { Flags } from 'cloudflare/resources/flagship/apps/flags/flags';

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
  resources: [BaseChangelog],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Flags],
});

const runTests = (
  client: PartialCloudflare<{ flagship: { apps: { flags: { changelog: BaseChangelog } } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.flagship.apps.flags.changelog.list('flag_key', {
      account_id: 'account_id',
      app_id: 'app_id',
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
    const response = await client.flagship.apps.flags.changelog.list('flag_key', {
      account_id: 'account_id',
      app_id: 'app_id',
      cursor: 'cursor',
      limit: 'limit',
    });
  });
};
describe('resource changelog', () => runTests(client));
describe('resource changelog (tree shakable, base)', () => runTests(partialClient));
describe('resource changelog (tree shakable, subresource)', () => runTests(parentPartialClient));
