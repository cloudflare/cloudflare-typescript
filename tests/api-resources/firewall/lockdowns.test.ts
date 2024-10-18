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
    const responsePromise = client.firewall.lockdowns.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      configurations: {},
      urls: ['shop.example.com/*', 'shop.example.com/*', 'shop.example.com/*'],
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
    const response = await client.firewall.lockdowns.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      configurations: { target: 'ip', value: '198.51.100.4' },
      urls: ['shop.example.com/*', 'shop.example.com/*', 'shop.example.com/*'],
    });
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.firewall.lockdowns.update('372e67954025e0ba6aaa6d586b9e0b59', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      configurations: {},
      urls: ['shop.example.com/*', 'shop.example.com/*', 'shop.example.com/*'],
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
    const response = await client.firewall.lockdowns.update('372e67954025e0ba6aaa6d586b9e0b59', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      configurations: { target: 'ip', value: '198.51.100.4' },
      urls: ['shop.example.com/*', 'shop.example.com/*', 'shop.example.com/*'],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.firewall.lockdowns.list({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.firewall.lockdowns.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.firewall.lockdowns.delete('372e67954025e0ba6aaa6d586b9e0b59', {
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
    const response = await client.firewall.lockdowns.delete('372e67954025e0ba6aaa6d586b9e0b59', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.firewall.lockdowns.get('372e67954025e0ba6aaa6d586b9e0b59', {
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
    const response = await client.firewall.lockdowns.get('372e67954025e0ba6aaa6d586b9e0b59', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
