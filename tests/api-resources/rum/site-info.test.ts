// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource siteInfo', () => {
  test('create: only required params', async () => {
    const responsePromise = client.rum.siteInfo.create({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.rum.siteInfo.create({ account_id: '023e105f4ecef8ad9ca31a8372d0c353', auto_install: true, host: 'example.com', zone_tag: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.rum.siteInfo.update('023e105f4ecef8ad9ca31a8372d0c353', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.rum.siteInfo.update('023e105f4ecef8ad9ca31a8372d0c353', { account_id: '023e105f4ecef8ad9ca31a8372d0c353', auto_install: true, host: 'example.com', zone_tag: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('list: only required params', async () => {
    const responsePromise = client.rum.siteInfo.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.rum.siteInfo.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353', order_by: 'host', page: 1, per_page: 10 });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.rum.siteInfo.delete('023e105f4ecef8ad9ca31a8372d0c353', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.rum.siteInfo.delete('023e105f4ecef8ad9ca31a8372d0c353', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.rum.siteInfo.get('023e105f4ecef8ad9ca31a8372d0c353', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.rum.siteInfo.get('023e105f4ecef8ad9ca31a8372d0c353', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
