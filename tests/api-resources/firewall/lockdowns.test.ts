// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lockdowns', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.firewall.lockdowns.create('023e105f4ecef8ad9ca31a8372d0c353', {});
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
    const response = await client.firewall.lockdowns.create('023e105f4ecef8ad9ca31a8372d0c353', {});
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.firewall.lockdowns.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '372e67954025e0ba6aaa6d586b9e0b59',
      {},
    );
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
    const response = await client.firewall.lockdowns.update(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '372e67954025e0ba6aaa6d586b9e0b59',
      {},
    );
  });

  test('list', async () => {
    const responsePromise = client.firewall.lockdowns.list('023e105f4ecef8ad9ca31a8372d0c353');
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
    await expect(
      client.firewall.lockdowns.list('023e105f4ecef8ad9ca31a8372d0c353', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.firewall.lockdowns.list(
        '023e105f4ecef8ad9ca31a8372d0c353',
        {
          created_on: '2014-01-01T05:20:00.12345Z',
          description: 'endpoints',
          description_search: 'endpoints',
          ip: '1.2.3.4',
          ip_range_search: '1.2.3.0/16',
          ip_search: '1.2.3.4',
          modified_on: '2014-01-01T05:20:00.12345Z',
          page: 1,
          per_page: 1,
          priority: 5,
          uri_search: '/some/path',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.firewall.lockdowns.delete(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '372e67954025e0ba6aaa6d586b9e0b59',
    );
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
    await expect(
      client.firewall.lockdowns.delete(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '372e67954025e0ba6aaa6d586b9e0b59',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.firewall.lockdowns.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '372e67954025e0ba6aaa6d586b9e0b59',
    );
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
    await expect(
      client.firewall.lockdowns.get('023e105f4ecef8ad9ca31a8372d0c353', '372e67954025e0ba6aaa6d586b9e0b59', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
