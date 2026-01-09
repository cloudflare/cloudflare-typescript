// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tokens', () => {
  test('create: only required params', async () => {
    const responsePromise = client.aiSearch.tokens.create({
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      cf_api_id: 'cf_api_id',
      cf_api_key: 'cf_api_key',
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
    const response = await client.aiSearch.tokens.create({
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      cf_api_id: 'cf_api_id',
      cf_api_key: 'cf_api_key',
      name: 'name',
      legacy: true,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.aiSearch.tokens.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  test('update: required and optional params', async () => {
    const response = await client.aiSearch.tokens.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.aiSearch.tokens.list({ account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.aiSearch.tokens.list({
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
      page: 1,
      per_page: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.aiSearch.tokens.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  test('delete: required and optional params', async () => {
    const response = await client.aiSearch.tokens.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
    });
  });

  test('read: only required params', async () => {
    const responsePromise = client.aiSearch.tokens.read('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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

  test('read: required and optional params', async () => {
    const response = await client.aiSearch.tokens.read('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
    });
  });
});
