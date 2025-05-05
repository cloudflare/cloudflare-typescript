// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource secrets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.secretsStore.stores.secrets.create('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '985e105f4ecef8ad9ca31a8372d0c353',
      body: [{ name: 'MY_API_KEY', scopes: ['workers'], value: 'api-token-secret-123' }],
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
    const response = await client.secretsStore.stores.secrets.create('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '985e105f4ecef8ad9ca31a8372d0c353',
      body: [{ name: 'MY_API_KEY', scopes: ['workers'], value: 'api-token-secret-123' }],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.secretsStore.stores.secrets.list('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '985e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.secretsStore.stores.secrets.list('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '985e105f4ecef8ad9ca31a8372d0c353',
      direction: 'asc',
      order: 'name',
      page: 2,
      per_page: 20,
      search: 'search',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.secretsStore.stores.secrets.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '3fd85f74b32742f1bff64a85009dda07',
      { account_id: '985e105f4ecef8ad9ca31a8372d0c353' },
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
    const response = await client.secretsStore.stores.secrets.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '3fd85f74b32742f1bff64a85009dda07',
      { account_id: '985e105f4ecef8ad9ca31a8372d0c353' },
    );
  });

  test('bulkDelete: only required params', async () => {
    const responsePromise = client.secretsStore.stores.secrets.bulkDelete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      { account_id: '985e105f4ecef8ad9ca31a8372d0c353' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkDelete: required and optional params', async () => {
    const response = await client.secretsStore.stores.secrets.bulkDelete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '985e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: investigate prism error for invalid security scheme used
  test.skip('duplicate: only required params', async () => {
    const responsePromise = client.secretsStore.stores.secrets.duplicate(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '3fd85f74b32742f1bff64a85009dda07',
      { account_id: '985e105f4ecef8ad9ca31a8372d0c353', name: 'MY_API_KEY' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate prism error for invalid security scheme used
  test.skip('duplicate: required and optional params', async () => {
    const response = await client.secretsStore.stores.secrets.duplicate(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '3fd85f74b32742f1bff64a85009dda07',
      { account_id: '985e105f4ecef8ad9ca31a8372d0c353', name: 'MY_API_KEY' },
    );
  });

  test('edit: only required params', async () => {
    const responsePromise = client.secretsStore.stores.secrets.edit(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '3fd85f74b32742f1bff64a85009dda07',
      { account_id: '985e105f4ecef8ad9ca31a8372d0c353', name: 'MY_API_KEY' },
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
    const response = await client.secretsStore.stores.secrets.edit(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '3fd85f74b32742f1bff64a85009dda07',
      {
        account_id: '985e105f4ecef8ad9ca31a8372d0c353',
        name: 'MY_API_KEY',
        scopes: ['workers'],
        value: 'api-token-secret-123',
      },
    );
  });

  test('get: only required params', async () => {
    const responsePromise = client.secretsStore.stores.secrets.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '3fd85f74b32742f1bff64a85009dda07',
      { account_id: '985e105f4ecef8ad9ca31a8372d0c353' },
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
    const response = await client.secretsStore.stores.secrets.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '3fd85f74b32742f1bff64a85009dda07',
      { account_id: '985e105f4ecef8ad9ca31a8372d0c353' },
    );
  });
});
