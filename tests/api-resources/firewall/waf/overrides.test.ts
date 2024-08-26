// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare, { toFile } from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({ apiKey: '144c9defac04969c7bfad8efaa8ea194', apiEmail: 'user@example.com', baseURL: process.env["TEST_API_BASE_URL"] ?? 'http://127.0.0.1:4010' });

describe('resource overrides', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.firewall.waf.overrides.create('023e105f4ecef8ad9ca31a8372d0c353', { urls: ['shop.example.com/*', 'shop.example.com/*', 'shop.example.com/*'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('create: required and optional params', async () => {
    const response = await client.firewall.waf.overrides.create('023e105f4ecef8ad9ca31a8372d0c353', { urls: ['shop.example.com/*', 'shop.example.com/*', 'shop.example.com/*'] });
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.firewall.waf.overrides.update('023e105f4ecef8ad9ca31a8372d0c353', { path_id: 'de677e5818985db1285d0e80225f06e5', body_id: '023e105f4ecef8ad9ca31a8372d0c353', rewrite_action: {}, rules: { '100015': 'challenge' }, urls: ['shop.example.com/*', 'shop.example.com/*', 'shop.example.com/*'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('update: required and optional params', async () => {
    const response = await client.firewall.waf.overrides.update('023e105f4ecef8ad9ca31a8372d0c353', { path_id: 'de677e5818985db1285d0e80225f06e5', body_id: '023e105f4ecef8ad9ca31a8372d0c353', rewrite_action: { block: 'challenge', challenge: 'challenge', default: 'challenge', disable: 'challenge', simulate: 'challenge' }, rules: { '100015': 'challenge' }, urls: ['shop.example.com/*', 'shop.example.com/*', 'shop.example.com/*'] });
  });

  test('list', async () => {
    const responsePromise = client.firewall.waf.overrides.list('023e105f4ecef8ad9ca31a8372d0c353');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.firewall.waf.overrides.list('023e105f4ecef8ad9ca31a8372d0c353', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.firewall.waf.overrides.list('023e105f4ecef8ad9ca31a8372d0c353', { page: 1, per_page: 5 }, { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.firewall.waf.overrides.delete('023e105f4ecef8ad9ca31a8372d0c353', 'de677e5818985db1285d0e80225f06e5');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.firewall.waf.overrides.delete('023e105f4ecef8ad9ca31a8372d0c353', 'de677e5818985db1285d0e80225f06e5', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.firewall.waf.overrides.get('023e105f4ecef8ad9ca31a8372d0c353', 'de677e5818985db1285d0e80225f06e5');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.firewall.waf.overrides.get('023e105f4ecef8ad9ca31a8372d0c353', 'de677e5818985db1285d0e80225f06e5', { path: '/_stainless_unknown_path' }))
      .rejects
      .toThrow(Cloudflare.NotFoundError);
  });
});
