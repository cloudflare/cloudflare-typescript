// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource policies', () => {
  test('create: only required params', async () => {
    const responsePromise = client.pageShield.policies.create({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353', action: 'allow', description: 'Checkout page CSP policy', enabled: true, expression: 'ends_with(http.request.uri.path, "/checkout")', value: 'script-src \'none\';' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.pageShield.policies.create({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353', action: 'allow', description: 'Checkout page CSP policy', enabled: true, expression: 'ends_with(http.request.uri.path, "/checkout")', value: 'script-src \'none\';' });
  });

  test('update: only required params', async () => {
    const responsePromise = client.pageShield.policies.update('023e105f4ecef8ad9ca31a8372d0c353', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.pageShield.policies.update('023e105f4ecef8ad9ca31a8372d0c353', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353', action: 'allow', description: 'Checkout page CSP policy', enabled: true, expression: 'ends_with(http.request.uri.path, "/checkout")', value: 'script-src \'none\';' });
  });

  test('list: only required params', async () => {
    const responsePromise = client.pageShield.policies.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.pageShield.policies.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.pageShield.policies.delete('023e105f4ecef8ad9ca31a8372d0c353', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.pageShield.policies.delete('023e105f4ecef8ad9ca31a8372d0c353', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.pageShield.policies.get('023e105f4ecef8ad9ca31a8372d0c353', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await client.pageShield.policies.get('023e105f4ecef8ad9ca31a8372d0c353', { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
});
