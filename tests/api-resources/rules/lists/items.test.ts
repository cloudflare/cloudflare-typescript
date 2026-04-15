// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseItems } from 'cloudflare/resources/rules/lists/items';
import { Lists } from 'cloudflare/resources/rules/lists/lists';

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
  resources: [BaseItems],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Lists],
});

const runTests = (client: PartialCloudflare<{ rules: { lists: { items: BaseItems } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.rules.lists.items.create('2c0fc9fa937b11eaa1b71c4d701ab86e', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [{ ip: '10.0.0.1' }],
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
    const response = await client.rules.lists.items.create('2c0fc9fa937b11eaa1b71c4d701ab86e', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [{ ip: '10.0.0.1', comment: 'Private IP address' }],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.rules.lists.items.update('2c0fc9fa937b11eaa1b71c4d701ab86e', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [{ ip: '10.0.0.1' }],
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
    const response = await client.rules.lists.items.update('2c0fc9fa937b11eaa1b71c4d701ab86e', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [{ ip: '10.0.0.1', comment: 'Private IP address' }],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.rules.lists.items.list('2c0fc9fa937b11eaa1b71c4d701ab86e', {
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

  test('list: required and optional params', async () => {
    const response = await client.rules.lists.items.list('2c0fc9fa937b11eaa1b71c4d701ab86e', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      cursor: 'zzz',
      per_page: 1,
      search: '1.1.1.',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.rules.lists.items.delete('2c0fc9fa937b11eaa1b71c4d701ab86e', {
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
    const response = await client.rules.lists.items.delete('2c0fc9fa937b11eaa1b71c4d701ab86e', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      items: [{ id: '34b12448945f11eaa1b71c4d701ab86e' }],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.rules.lists.items.get('34b12448945f11eaa1b71c4d701ab86e', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      list_id: '2c0fc9fa937b11eaa1b71c4d701ab86e',
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
    const response = await client.rules.lists.items.get('34b12448945f11eaa1b71c4d701ab86e', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      list_id: '2c0fc9fa937b11eaa1b71c4d701ab86e',
    });
  });
};
describe('resource items', () => runTests(client));
describe('resource items (tree shakable, base)', () => runTests(partialClient));
describe('resource items (tree shakable, subresource)', () => runTests(parentPartialClient));
