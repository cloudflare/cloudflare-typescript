// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource interconnects', () => {
  test('create: only required params', async () => {
    const responsePromise = client.networkInterconnects.interconnects.create({
      account_id: 'account_id',
      account: 'account',
      slot_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      type: 'type',
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
    const response = await client.networkInterconnects.interconnects.create({
      account_id: 'account_id',
      account: 'account',
      slot_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      type: 'type',
      speed: 'speed',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.networkInterconnects.interconnects.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.networkInterconnects.interconnects.list({
      account_id: 'account_id',
      cursor: 0,
      limit: 0,
      site: 'site',
      type: 'type',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.networkInterconnects.interconnects.delete('icon', {
      account_id: 'account_id',
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
    const response = await client.networkInterconnects.interconnects.delete('icon', {
      account_id: 'account_id',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.networkInterconnects.interconnects.get('icon', {
      account_id: 'account_id',
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
    const response = await client.networkInterconnects.interconnects.get('icon', {
      account_id: 'account_id',
    });
  });

  test('loa: only required params', async () => {
    const responsePromise = client.networkInterconnects.interconnects.loa('icon', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('loa: required and optional params', async () => {
    const response = await client.networkInterconnects.interconnects.loa('icon', {
      account_id: 'account_id',
    });
  });

  test('status: only required params', async () => {
    const responsePromise = client.networkInterconnects.interconnects.status('icon', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('status: required and optional params', async () => {
    const response = await client.networkInterconnects.interconnects.status('icon', {
      account_id: 'account_id',
    });
  });
});
