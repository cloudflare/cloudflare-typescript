// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rules', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.firewall.rules.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action: {},
      filter: {},
    });
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
    const response = await client.firewall.rules.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action: {
        mode: 'simulate',
        response: { body: '<error>This request has been rate-limited.</error>', content_type: 'text/xml' },
        timeout: 86400,
      },
      filter: {
        description: 'Restrict access from these browsers on this address range.',
        expression:
          '(http.request.uri.path ~ ".*wp-login.php" or http.request.uri.path ~ ".*xmlrpc.php") and ip.addr ne 172.16.22.155',
        paused: false,
        ref: 'FIL-100',
      },
    });
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.firewall.rules.update('372e67954025e0ba6aaa6d586b9e0b60', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action: {},
      filter: {},
    });
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
    const response = await client.firewall.rules.update('372e67954025e0ba6aaa6d586b9e0b60', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      action: {
        mode: 'simulate',
        response: { body: '<error>This request has been rate-limited.</error>', content_type: 'text/xml' },
        timeout: 86400,
      },
      filter: {
        description: 'Restrict access from these browsers on this address range.',
        expression:
          '(http.request.uri.path ~ ".*wp-login.php" or http.request.uri.path ~ ".*xmlrpc.php") and ip.addr ne 172.16.22.155',
        paused: false,
        ref: 'FIL-100',
      },
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.firewall.rules.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.firewall.rules.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      id: '372e67954025e0ba6aaa6d586b9e0b60',
      action: 'block',
      description: 'mir',
      page: 1,
      paused: false,
      per_page: 5,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.firewall.rules.delete('372e67954025e0ba6aaa6d586b9e0b60', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.firewall.rules.delete('372e67954025e0ba6aaa6d586b9e0b60', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // TODO: investigate broken test
  test.skip('edit: only required params', async () => {
    const responsePromise = client.firewall.rules.edit('372e67954025e0ba6aaa6d586b9e0b60', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('edit: required and optional params', async () => {
    const response = await client.firewall.rules.edit('372e67954025e0ba6aaa6d586b9e0b60', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.firewall.rules.get('372e67954025e0ba6aaa6d586b9e0b60', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.firewall.rules.get('372e67954025e0ba6aaa6d586b9e0b60', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      id: '372e67954025e0ba6aaa6d586b9e0b60',
    });
  });
});
