// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { R2DataCatalog } from 'cloudflare/resources/r2-data-catalog/r2-data-catalog';
import { BaseNamespaces } from 'cloudflare/resources/r2-data-catalog/namespaces/namespaces';

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
  resources: [BaseNamespaces],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [R2DataCatalog],
});

const runTests = (client: PartialCloudflare<{ r2DataCatalog: { namespaces: BaseNamespaces } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.r2DataCatalog.namespaces.list('my-data-bucket', {
      account_id: '0123456789abcdef0123456789abcdef',
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
    const response = await client.r2DataCatalog.namespaces.list('my-data-bucket', {
      account_id: '0123456789abcdef0123456789abcdef',
      page_size: 1,
      page_token: 'page_token',
      parent: 'parent',
      return_details: true,
      return_uuids: true,
    });
  });
};
describe('resource namespaces', () => runTests(client));
describe('resource namespaces (tree shakable, base)', () => runTests(partialClient));
describe('resource namespaces (tree shakable, subresource)', () => runTests(parentPartialClient));
