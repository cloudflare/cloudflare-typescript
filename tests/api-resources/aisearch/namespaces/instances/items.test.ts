// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Instances } from 'cloudflare/resources/aisearch/namespaces/instances/instances';
import { BaseItems } from 'cloudflare/resources/aisearch/namespaces/instances/items';

import Cloudflare, { toFile } from 'cloudflare';
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
  resources: [BaseItems],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Instances],
});

const runTests = (
  client: PartialCloudflare<{ aiSearch: { namespaces: { instances: { items: BaseItems } } } }>,
) => {
  test('list: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.items.list('my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
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
    const response = await client.aiSearch.namespaces.instances.items.list('my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      metadata_filter: 'metadata_filter',
      page: 1,
      per_page: 0,
      search: 'search',
      sort_by: 'status',
      source: 'source',
      status: 'queued',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.items.delete('item_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      id: 'my-ai-search',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.instances.items.delete('item_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      id: 'my-ai-search',
    });
  });

  test('chunks: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.items.chunks('item_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      id: 'my-ai-search',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('chunks: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.instances.items.chunks('item_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      id: 'my-ai-search',
      limit: 1,
      offset: 0,
    });
  });

  test('createOrUpdate: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.items.createOrUpdate('my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      key: 'key',
      next_action: 'INDEX',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createOrUpdate: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.instances.items.createOrUpdate('my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      key: 'key',
      next_action: 'INDEX',
    });
  });

  test('download: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.instances.items.download('item_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      id: 'my-ai-search',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.items.get('item_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      id: 'my-ai-search',
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
    const response = await client.aiSearch.namespaces.instances.items.get('item_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      id: 'my-ai-search',
    });
  });

  test('logs: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.items.logs('item_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      id: 'my-ai-search',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('logs: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.instances.items.logs('item_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      id: 'my-ai-search',
      cursor: 'cursor',
      limit: 1,
    });
  });

  test('sync: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.items.sync('item_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      id: 'my-ai-search',
      next_action: 'INDEX',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('sync: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.instances.items.sync('item_id', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      id: 'my-ai-search',
      next_action: 'INDEX',
    });
  });

  test('upload: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.items.upload('my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      file: { file: await toFile(Buffer.from('# my file contents'), 'README.md') },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('upload: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.instances.items.upload('my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      name: 'my-namespace',
      file: {
        file: await toFile(Buffer.from('# my file contents'), 'README.md'),
        metadata: 'metadata',
        wait_for_completion: true,
      },
    });
  });
};
describe('resource items', () => runTests(client));
describe('resource items (tree shakable, base)', () => runTests(partialClient));
describe('resource items (tree shakable, subresource)', () => runTests(parentPartialClient));
