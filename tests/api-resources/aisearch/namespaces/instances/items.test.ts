// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource items', () => {
  test('list: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.items.list('my-namespace', 'my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
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
    const response = await client.aiSearch.namespaces.instances.items.list('my-namespace', 'my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
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
    const responsePromise = client.aiSearch.namespaces.instances.items.delete(
      'my-namespace',
      'my-ai-search',
      'item_id',
      { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
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
    const response = await client.aiSearch.namespaces.instances.items.delete(
      'my-namespace',
      'my-ai-search',
      'item_id',
      { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
    );
  });

  test('chunks: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.items.chunks(
      'my-namespace',
      'my-ai-search',
      'item_id',
      { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('chunks: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.instances.items.chunks(
      'my-namespace',
      'my-ai-search',
      'item_id',
      {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        limit: 1,
        offset: 0,
      },
    );
  });

  test('createOrUpdate: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.items.createOrUpdate(
      'my-namespace',
      'my-ai-search',
      {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        key: 'key',
        next_action: 'INDEX',
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

  test('createOrUpdate: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.instances.items.createOrUpdate(
      'my-namespace',
      'my-ai-search',
      {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        key: 'key',
        next_action: 'INDEX',
      },
    );
  });

  test('download: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.instances.items.download(
      'my-namespace',
      'my-ai-search',
      'item_id',
      { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.items.get(
      'my-namespace',
      'my-ai-search',
      'item_id',
      { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
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
    const response = await client.aiSearch.namespaces.instances.items.get(
      'my-namespace',
      'my-ai-search',
      'item_id',
      { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
    );
  });

  test('logs: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.items.logs(
      'my-namespace',
      'my-ai-search',
      'item_id',
      { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('logs: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.instances.items.logs(
      'my-namespace',
      'my-ai-search',
      'item_id',
      {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        cursor: 'cursor',
        limit: 1,
      },
    );
  });

  test('sync: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.items.sync(
      'my-namespace',
      'my-ai-search',
      'item_id',
      { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22', next_action: 'INDEX' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('sync: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.instances.items.sync(
      'my-namespace',
      'my-ai-search',
      'item_id',
      { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22', next_action: 'INDEX' },
    );
  });

  test('upload: only required params', async () => {
    const responsePromise = client.aiSearch.namespaces.instances.items.upload(
      'my-namespace',
      'my-ai-search',
      {
        account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
        file: { file: await toFile(Buffer.from('# my file contents'), 'README.md') },
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

  test('upload: required and optional params', async () => {
    const response = await client.aiSearch.namespaces.instances.items.upload('my-namespace', 'my-ai-search', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      file: {
        file: await toFile(Buffer.from('# my file contents'), 'README.md'),
        metadata: 'metadata',
        wait_for_completion: true,
      },
    });
  });
});
