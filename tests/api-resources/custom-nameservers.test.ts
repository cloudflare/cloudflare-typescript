// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customNameservers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.customNameservers.create({
      account_id: '372e67954025e0ba6aaa6d586b9e0b59',
      ns_name: 'ns1.example.com',
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
    const response = await client.customNameservers.create({
      account_id: '372e67954025e0ba6aaa6d586b9e0b59',
      ns_name: 'ns1.example.com',
      ns_set: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.customNameservers.delete('ns1.example.com', {
      account_id: '372e67954025e0ba6aaa6d586b9e0b59',
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
    const response = await client.customNameservers.delete('ns1.example.com', {
      account_id: '372e67954025e0ba6aaa6d586b9e0b59',
    });
  });

  test('availabilty: only required params', async () => {
    const responsePromise = client.customNameservers.availabilty({
      account_id: '372e67954025e0ba6aaa6d586b9e0b59',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('availabilty: required and optional params', async () => {
    const response = await client.customNameservers.availabilty({
      account_id: '372e67954025e0ba6aaa6d586b9e0b59',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.customNameservers.get({ account_id: '372e67954025e0ba6aaa6d586b9e0b59' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.customNameservers.get({ account_id: '372e67954025e0ba6aaa6d586b9e0b59' });
  });
});
