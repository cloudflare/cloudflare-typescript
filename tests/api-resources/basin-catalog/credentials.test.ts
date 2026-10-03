// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BasinCatalog } from 'cloudflare/resources/basin-catalog/basin-catalog';
import { BaseCredentials } from 'cloudflare/resources/basin-catalog/credentials';

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
  resources: [BaseCredentials],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BasinCatalog],
});

const runTests = (client: PartialCloudflare<{ basinCatalog: { credentials: BaseCredentials } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.basinCatalog.credentials.create('my-data-bucket', {
      account_id: '0123456789abcdef0123456789abcdef',
      token: 'your-cloudflare-api-token-here',
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
    const response = await client.basinCatalog.credentials.create('my-data-bucket', {
      account_id: '0123456789abcdef0123456789abcdef',
      token: 'your-cloudflare-api-token-here',
    });
  });
};
describe('resource credentials', () => runTests(client));
describe('resource credentials (tree shakable, base)', () => runTests(partialClient));
describe('resource credentials (tree shakable, subresource)', () => runTests(parentPartialClient));
