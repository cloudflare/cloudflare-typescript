// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseNodes } from 'cloudflare/resources/zero-trust/cws/tenant-structures/nodes';
import { TenantStructures } from 'cloudflare/resources/zero-trust/cws/tenant-structures/tenant-structures';

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
  resources: [BaseNodes],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [TenantStructures],
});

const runTests = (
  client: PartialCloudflare<{ zeroTrust: { cws: { tenantStructures: { nodes: BaseNodes } } } }>,
) => {
  test('create: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.tenantStructures.nodes.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        native_id: 'x',
        node_kind: 'x',
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.zeroTrust.cws.tenantStructures.nodes.create(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        native_id: 'x',
        node_kind: 'x',
        name: 'name',
        parent: 'parent',
      },
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.tenantStructures.nodes.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        structure_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        native_id: 'x',
        node_kind: 'x',
      },
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
    const response = await client.zeroTrust.cws.tenantStructures.nodes.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        structure_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        native_id: 'x',
        node_kind: 'x',
        name: 'name',
        parent: 'parent',
      },
    );
  });

  test('list: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.tenantStructures.nodes.list(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.zeroTrust.cws.tenantStructures.nodes.list(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        cursor: 'cursor',
        direction: 'asc',
        name: 'name',
        native_id: 'native_id',
        node_kind: 'node_kind',
        order: 'name',
        parent: 'parent',
        per_page: 1,
      },
    );
  });

  test('delete: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.tenantStructures.nodes.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        structure_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
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
    const response = await client.zeroTrust.cws.tenantStructures.nodes.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        structure_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
    );
  });

  test('batch: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.tenantStructures.nodes.batch(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        creates: [{ native_id: 'x', node_kind: 'x' }],
        deletes: [{ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
        updates: [{ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('batch: required and optional params', async () => {
    const response = await client.zeroTrust.cws.tenantStructures.nodes.batch(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        creates: [
          {
            native_id: 'x',
            node_kind: 'x',
            name: 'name',
            parent: 'parent',
          },
        ],
        deletes: [{ id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
        updates: [
          {
            id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            name: 'name',
            parent: 'parent',
          },
        ],
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.zeroTrust.cws.tenantStructures.nodes.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        structure_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
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
    const response = await client.zeroTrust.cws.tenantStructures.nodes.get(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        account_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        structure_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      },
    );
  });
};
describe('resource nodes', () => runTests(client));
describe('resource nodes (tree shakable, base)', () => runTests(partialClient));
describe('resource nodes (tree shakable, subresource)', () => runTests(parentPartialClient));
