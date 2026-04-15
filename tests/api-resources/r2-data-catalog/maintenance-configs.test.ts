// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseMaintenanceConfigs } from 'cloudflare/resources/r2-data-catalog/maintenance-configs';
import { R2DataCatalog } from 'cloudflare/resources/r2-data-catalog/r2-data-catalog';

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
  resources: [R2DataCatalog],
});

const runTests = (
  client: PartialCloudflare<{ r2DataCatalog: { maintenanceConfigs: BaseMaintenanceConfigs } }>,
) => {
  test('update: only required params', async () => {
    const responsePromise = client.r2DataCatalog.maintenanceConfigs.update('my-data-bucket', {
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

  test('update: required and optional params', async () => {
    const response = await client.r2DataCatalog.maintenanceConfigs.update('my-data-bucket', {
      account_id: '0123456789abcdef0123456789abcdef',
      compaction: { state: 'enabled', target_size_mb: '256' },
      snapshot_expiration: {
        max_snapshot_age: '14d',
        min_snapshots_to_keep: 5,
        state: 'enabled',
      },
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.r2DataCatalog.maintenanceConfigs.get('my-data-bucket', {
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

  test('get: required and optional params', async () => {
    const response = await client.r2DataCatalog.maintenanceConfigs.get('my-data-bucket', {
      account_id: '0123456789abcdef0123456789abcdef',
    });
  });
};
describe('resource maintenanceConfigs', () => runTests(client));
describe('resource maintenanceConfigs (tree shakable, base)', () => runTests(partialClient));
describe('resource maintenanceConfigs (tree shakable, subresource)', () => runTests(parentPartialClient));
