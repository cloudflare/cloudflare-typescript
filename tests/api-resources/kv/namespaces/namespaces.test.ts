// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource namespaces', () => {
  test('create: only required params', async () => {
    const responsePromise = client.kv.namespaces.create({ account_id: '023e105f4ecef8ad9ca31a8372d0c353', title: 'My Own Namespace' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.kv.namespaces.create({ account_id: '023e105f4ecef8ad9ca31a8372d0c353', title: 'My Own Namespace' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.kv.namespaces.update('0f2ac74b498b48028cb68387c421e279', { account_id: '023e105f4ecef8ad9ca31a8372d0c353', title: 'My Own Namespace' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.kv.namespaces.update('0f2ac74b498b48028cb68387c421e279', { account_id: '023e105f4ecef8ad9ca31a8372d0c353', title: 'My Own Namespace' });
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
    const response = await client.kv.namespaces.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353', direction: 'asc', order: 'id', page: 1, per_page: 5 });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.kv.namespaces.delete('0f2ac74b498b48028cb68387c421e279', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.kv.namespaces.delete('0f2ac74b498b48028cb68387c421e279', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.kv.namespaces.get('0f2ac74b498b48028cb68387c421e279', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.kv.namespaces.get('0f2ac74b498b48028cb68387c421e279', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
