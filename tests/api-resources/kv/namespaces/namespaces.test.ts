// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { KV } from 'cloudflare/resources/kv/kv';
import { BaseNamespaces } from 'cloudflare/resources/kv/namespaces/namespaces';

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
  resources: [KV],
});

const runTests = (client: PartialCloudflare<{ kv: { namespaces: BaseNamespaces } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.kv.namespaces.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      title: 'My Own Namespace',
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
    const response = await client.kv.namespaces.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      title: 'My Own Namespace',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.kv.namespaces.update('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      title: 'My Own Namespace',
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
    const response = await client.kv.namespaces.update('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      title: 'My Own Namespace',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.kv.namespaces.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.kv.namespaces.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      direction: 'asc',
      order: 'id',
      page: 1,
      per_page: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.kv.namespaces.delete('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.kv.namespaces.delete('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('bulkDelete: only required params', async () => {
    const responsePromise = client.kv.namespaces.bulkDelete('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: ['My-Key'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkDelete: required and optional params', async () => {
    const response = await client.kv.namespaces.bulkDelete('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: ['My-Key'],
    });
  });

  test('bulkGet: only required params', async () => {
    const responsePromise = client.kv.namespaces.bulkGet('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      keys: ['My-Key'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkGet: required and optional params', async () => {
    const response = await client.kv.namespaces.bulkGet('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      keys: ['My-Key'],
      type: 'text',
      withMetadata: true,
    });
  });

  test('bulkUpdate: only required params', async () => {
    const responsePromise = client.kv.namespaces.bulkUpdate('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [{ key: 'My-Key', value: 'Some string' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkUpdate: required and optional params', async () => {
    const response = await client.kv.namespaces.bulkUpdate('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [
        {
          key: 'My-Key',
          value: 'Some string',
          base64: true,
          expiration: 1578435000,
          expiration_ttl: 300,
          metadata: {},
        },
      ],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.kv.namespaces.get('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.kv.namespaces.get('0f2ac74b498b48028cb68387c421e279', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource namespaces', () => runTests(client));
describe('resource namespaces (tree shakable, base)', () => runTests(partialClient));
describe('resource namespaces (tree shakable, subresource)', () => runTests(parentPartialClient));
