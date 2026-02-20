// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource datasets', () => {
  test('create: only required params', async () => {
    const responsePromise = client.aiGateway.datasets.create('my-gateway', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      enable: true,
      filters: [
        {
          key: 'created_at',
          operator: 'eq',
          value: ['string'],
        },
      ],
      name: 'name',
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
    const response = await client.aiGateway.datasets.create('my-gateway', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      enable: true,
      filters: [
        {
          key: 'created_at',
          operator: 'eq',
          value: ['string'],
        },
      ],
      name: 'name',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.aiGateway.datasets.update('my-gateway', 'id', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      enable: true,
      filters: [
        {
          key: 'created_at',
          operator: 'eq',
          value: ['string'],
        },
      ],
      name: 'name',
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
    const response = await client.aiGateway.datasets.update('my-gateway', 'id', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      enable: true,
      filters: [
        {
          key: 'created_at',
          operator: 'eq',
          value: ['string'],
        },
      ],
      name: 'name',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.aiGateway.datasets.list('my-gateway', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
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
    const response = await client.aiGateway.datasets.list('my-gateway', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      enable: true,
      name: 'name',
      page: 1,
      per_page: 1,
      search: 'search',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.aiGateway.datasets.delete('my-gateway', 'id', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
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
    const response = await client.aiGateway.datasets.delete('my-gateway', 'id', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.aiGateway.datasets.get('my-gateway', 'id', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
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
    const response = await client.aiGateway.datasets.get('my-gateway', 'id', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
    });
  });
});
