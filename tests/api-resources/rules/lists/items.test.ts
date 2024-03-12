// File generated from our OpenAPI spec by Stainless.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource items', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = cloudflare.rules.lists.items.create('2c0fc9fa937b11eaa1b71c4d701ab86e', {
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

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await cloudflare.rules.lists.items.create('2c0fc9fa937b11eaa1b71c4d701ab86e', {
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

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = cloudflare.rules.lists.items.update('2c0fc9fa937b11eaa1b71c4d701ab86e', {
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

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await cloudflare.rules.lists.items.update('2c0fc9fa937b11eaa1b71c4d701ab86e', {
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

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = cloudflare.rules.lists.items.list('2c0fc9fa937b11eaa1b71c4d701ab86e', {
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

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await cloudflare.rules.lists.items.list('2c0fc9fa937b11eaa1b71c4d701ab86e', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      cursor: 'zzz',
      per_page: 1,
      search: '1.1.1.',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = cloudflare.rules.lists.items.delete('2c0fc9fa937b11eaa1b71c4d701ab86e', {
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

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await cloudflare.rules.lists.items.delete('2c0fc9fa937b11eaa1b71c4d701ab86e', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      items: [{ id: '34b12448945f11eaa1b71c4d701ab86e' }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = cloudflare.rules.lists.items.get(
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

  // skipped: tests are disabled for the time being
  test.skip('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cloudflare.rules.lists.items.get(
        '023e105f4ecef8ad9ca31a8372d0c353',
        '2c0fc9fa937b11eaa1b71c4d701ab86e',
        '34b12448945f11eaa1b71c4d701ab86e',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Cloudflare.NotFoundError);
  });
});
