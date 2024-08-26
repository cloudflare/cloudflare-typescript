// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource rules', () => {
  test('create: only required params', async () => {
    const responsePromise = client.rum.rules.create('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.rum.rules.create('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '023e105f4ecef8ad9ca31a8372d0c353', host: 'example.com', inclusive: true, is_paused: false, paths: ['*'] });
  });

  test('update: only required params', async () => {
    const responsePromise = client.rum.rules.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.rum.rules.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '023e105f4ecef8ad9ca31a8372d0c353', host: 'example.com', inclusive: true, is_paused: false, paths: ['*'] });
  });

  test('list: only required params', async () => {
    const responsePromise = client.rum.rules.list('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.rum.rules.list('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.rum.rules.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.rum.rules.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', 'f174e90a-fafe-4643-bbbc-4a0ed4fc8415', { account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
