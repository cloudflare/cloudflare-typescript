// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Namespaces } from 'cloudflare/resources/r2-data-catalog/namespaces/namespaces';
import { BaseTables } from 'cloudflare/resources/r2-data-catalog/namespaces/tables/tables';

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
  resources: [BaseTables],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Namespaces],
});

const runTests = (client: PartialCloudflare<{ r2DataCatalog: { namespaces: { tables: BaseTables } } }>) => {
  test('list: only required params', async () => {
    const responsePromise = client.r2DataCatalog.namespaces.tables.list('bronze', {
      account_id: '0123456789abcdef0123456789abcdef',
      bucket_name: 'my-data-bucket',
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
    const response = await client.r2DataCatalog.namespaces.tables.list('bronze', {
      account_id: '0123456789abcdef0123456789abcdef',
      bucket_name: 'my-data-bucket',
      page_size: 1,
      page_token: 'page_token',
      return_details: true,
      return_uuids: true,
    });
  });
};
describe('resource tables', () => runTests(client));
describe('resource tables (tree shakable, base)', () => runTests(partialClient));
describe('resource tables (tree shakable, subresource)', () => runTests(parentPartialClient));
