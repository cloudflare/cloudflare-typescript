// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseMaintenanceConfigs } from 'cloudflare/resources/r2-data-catalog/namespaces/tables/maintenance-configs';
import { Tables } from 'cloudflare/resources/r2-data-catalog/namespaces/tables/tables';

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
  resources: [BaseMaintenanceConfigs],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Tables],
});

const runTests = (
  client: PartialCloudflare<{
    r2DataCatalog: { namespaces: { tables: { maintenanceConfigs: BaseMaintenanceConfigs } } };
  }>,
) => {
  test('update: only required params', async () => {
    const responsePromise = client.r2DataCatalog.namespaces.tables.maintenanceConfigs.update('my_table', {
      account_id: '0123456789abcdef0123456789abcdef',
      bucket_name: 'my-data-bucket',
      namespace: 'my_namespace%1Fsub_namespace',
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
    const response = await client.r2DataCatalog.namespaces.tables.maintenanceConfigs.update('my_table', {
      account_id: '0123456789abcdef0123456789abcdef',
      bucket_name: 'my-data-bucket',
      namespace: 'my_namespace%1Fsub_namespace',
      compaction: { state: 'enabled', target_size_mb: '256' },
      snapshot_expiration: {
        max_snapshot_age: '14d',
        min_snapshots_to_keep: 5,
        state: 'enabled',
      },
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.r2DataCatalog.namespaces.tables.maintenanceConfigs.get('my_table', {
      account_id: '0123456789abcdef0123456789abcdef',
      bucket_name: 'my-data-bucket',
      namespace: 'my_namespace%1Fsub_namespace',
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
    const response = await client.r2DataCatalog.namespaces.tables.maintenanceConfigs.get('my_table', {
      account_id: '0123456789abcdef0123456789abcdef',
      bucket_name: 'my-data-bucket',
      namespace: 'my_namespace%1Fsub_namespace',
    });
  });
};
describe('resource maintenanceConfigs', () => runTests(client));
describe('resource maintenanceConfigs (tree shakable, base)', () => runTests(partialClient));
describe('resource maintenanceConfigs (tree shakable, subresource)', () => runTests(parentPartialClient));
