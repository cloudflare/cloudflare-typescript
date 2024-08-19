// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource warpConnector', () => {
  test('create: only required params', async () => {
    const responsePromise = client.warpConnector.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      name: 'blog',
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
    const response = await client.warpConnector.create({
      account_id: '699d98642c564d2e855e9661899b7252',
      name: 'blog',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.warpConnector.list({ account_id: '699d98642c564d2e855e9661899b7252' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.warpConnector.list({
      account_id: '699d98642c564d2e855e9661899b7252',
      exclude_prefix: 'vpc1-',
      existed_at: '2019-10-12T07:20:50.52Z',
      include_prefix: 'vpc1-',
      is_deleted: true,
      name: 'blog',
      page: 1,
      per_page: 1,
      status: 'inactive',
      uuid: 'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
      was_active_at: '2009-11-10T23:00:00Z',
      was_inactive_at: '2009-11-10T23:00:00Z',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.warpConnector.delete('f70ff985-a4ef-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.warpConnector.delete('f70ff985-a4ef-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.warpConnector.edit('f70ff985-a4ef-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.warpConnector.edit('f70ff985-a4ef-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
      name: 'blog',
      tunnel_secret: 'AQIDBAUGBwgBAgMEBQYHCAECAwQFBgcIAQIDBAUGBwg=',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.warpConnector.get('f70ff985-a4ef-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
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
    const response = await client.warpConnector.get('f70ff985-a4ef-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });

  test('token: only required params', async () => {
    const responsePromise = client.warpConnector.token('f70ff985-a4ef-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('token: required and optional params', async () => {
    const response = await client.warpConnector.token('f70ff985-a4ef-4643-bbbc-4a0ed4fc8415', {
      account_id: '699d98642c564d2e855e9661899b7252',
    });
  });
});
