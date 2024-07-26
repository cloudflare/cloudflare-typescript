// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource items', () => {
  test('create: only required params', async () => {
    const responsePromise = client.rules.lists.items.create('2c0fc9fa937b11eaa1b71c4d701ab86e', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [{}, {}, {}],
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
    const response = await client.rules.lists.items.create('2c0fc9fa937b11eaa1b71c4d701ab86e', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [
        {
          asn: 5567,
          comment: 'Private IP address',
          hostname: { url_hostname: 'example.com' },
          ip: '10.0.0.1',
          redirect: {
            include_subdomains: true,
            preserve_path_suffix: true,
            preserve_query_string: true,
            source_url: 'example.com/arch',
            status_code: 301,
            subpath_matching: true,
            target_url: 'https://archlinux.org/',
          },
        },
        {
          asn: 5567,
          comment: 'Private IP address',
          hostname: { url_hostname: 'example.com' },
          ip: '10.0.0.1',
          redirect: {
            include_subdomains: true,
            preserve_path_suffix: true,
            preserve_query_string: true,
            source_url: 'example.com/arch',
            status_code: 301,
            subpath_matching: true,
            target_url: 'https://archlinux.org/',
          },
        },
        {
          asn: 5567,
          comment: 'Private IP address',
          hostname: { url_hostname: 'example.com' },
          ip: '10.0.0.1',
          redirect: {
            include_subdomains: true,
            preserve_path_suffix: true,
            preserve_query_string: true,
            source_url: 'example.com/arch',
            status_code: 301,
            subpath_matching: true,
            target_url: 'https://archlinux.org/',
          },
        },
      ],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.rules.lists.items.update('2c0fc9fa937b11eaa1b71c4d701ab86e', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [{}, {}, {}],
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
    const response = await client.rules.lists.items.update('2c0fc9fa937b11eaa1b71c4d701ab86e', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [
        {
          asn: 5567,
          comment: 'Private IP address',
          hostname: { url_hostname: 'example.com' },
          ip: '10.0.0.1',
          redirect: {
            include_subdomains: true,
            preserve_path_suffix: true,
            preserve_query_string: true,
            source_url: 'example.com/arch',
            status_code: 301,
            subpath_matching: true,
            target_url: 'https://archlinux.org/',
          },
        },
        {
          asn: 5567,
          comment: 'Private IP address',
          hostname: { url_hostname: 'example.com' },
          ip: '10.0.0.1',
          redirect: {
            include_subdomains: true,
            preserve_path_suffix: true,
            preserve_query_string: true,
            source_url: 'example.com/arch',
            status_code: 301,
            subpath_matching: true,
            target_url: 'https://archlinux.org/',
          },
        },
        {
          asn: 5567,
          comment: 'Private IP address',
          hostname: { url_hostname: 'example.com' },
          ip: '10.0.0.1',
          redirect: {
            include_subdomains: true,
            preserve_path_suffix: true,
            preserve_query_string: true,
            source_url: 'example.com/arch',
            status_code: 301,
            subpath_matching: true,
            target_url: 'https://archlinux.org/',
          },
        },
      ],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.rules.lists.items.list('2c0fc9fa937b11eaa1b71c4d701ab86e', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.rules.lists.items.list('2c0fc9fa937b11eaa1b71c4d701ab86e', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      cursor: 'zzz',
      per_page: 1,
      search: '1.1.1.',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.rules.lists.items.delete('2c0fc9fa937b11eaa1b71c4d701ab86e', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.rules.lists.items.delete('2c0fc9fa937b11eaa1b71c4d701ab86e', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get', async () => {
    const responsePromise = client.rules.lists.items.get(
      '023e105f4ecef8ad9ca31a8372d0c353',
      '2c0fc9fa937b11eaa1b71c4d701ab86e',
      '34b12448945f11eaa1b71c4d701ab86e',
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
      client.rules.lists.items.get(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '2c0fc9fa937b11eaa1b71c4d701ab86e',
        '34b12448945f11eaa1b71c4d701ab86e',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
