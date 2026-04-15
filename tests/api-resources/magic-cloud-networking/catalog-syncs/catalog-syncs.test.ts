// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { MagicCloudNetworking } from 'cloudflare/resources/magic-cloud-networking/magic-cloud-networking';
import { BaseCatalogSyncs } from 'cloudflare/resources/magic-cloud-networking/catalog-syncs/catalog-syncs';

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
  resources: [BaseCatalogSyncs],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [MagicCloudNetworking],
});

const runTests = (
  client: PartialCloudflare<{ magicCloudNetworking: { catalogSyncs: BaseCatalogSyncs } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.catalogSyncs.create({
      account_id: 'account_id',
      destination_type: 'NONE',
      name: 'name',
      update_mode: 'AUTO',
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
    const response = await client.magicCloudNetworking.catalogSyncs.create({
      account_id: 'account_id',
      destination_type: 'NONE',
      name: 'name',
      update_mode: 'AUTO',
      description: 'description',
      policy: 'policy',
      forwarded: 'forwarded',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.catalogSyncs.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.magicCloudNetworking.catalogSyncs.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'account_id',
        description: 'description',
        name: 'name',
        policy: 'policy',
        update_mode: 'AUTO',
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.catalogSyncs.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.magicCloudNetworking.catalogSyncs.list({ account_id: 'account_id' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.catalogSyncs.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.magicCloudNetworking.catalogSyncs.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id', delete_destination: true },
    );
  });

  test('edit: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.catalogSyncs.edit(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.magicCloudNetworking.catalogSyncs.edit(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'account_id',
        description: 'description',
        name: 'name',
        policy: 'policy',
        update_mode: 'AUTO',
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.catalogSyncs.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.magicCloudNetworking.catalogSyncs.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
  });

  test('refresh: only required params', async () => {
    const responsePromise = client.magicCloudNetworking.catalogSyncs.refresh(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('refresh: required and optional params', async () => {
    const response = await client.magicCloudNetworking.catalogSyncs.refresh(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'account_id' },
    );
  });
};
describe('resource catalogSyncs', () => runTests(client));
describe('resource catalogSyncs (tree shakable, base)', () => runTests(partialClient));
describe('resource catalogSyncs (tree shakable, subresource)', () => runTests(parentPartialClient));
