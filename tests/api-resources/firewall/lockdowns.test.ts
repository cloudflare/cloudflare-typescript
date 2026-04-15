// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Firewall } from 'cloudflare/resources/firewall/firewall';
import { BaseLockdowns } from 'cloudflare/resources/firewall/lockdowns';

import Cloudflare from 'cloudflare';
import { createClient, type PartialCloudflare } from 'cloudflare/tree-shakable';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

const partialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [BaseLockdowns],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Firewall],
});

const runTests = (client: PartialCloudflare<{ firewall: { lockdowns: BaseLockdowns } }>) => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.firewall.lockdowns.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      configurations: [{}],
      urls: ['shop.example.com/*'],
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
      configurations: [{ target: 'ip', value: '198.51.100.4' }],
      urls: ['shop.example.com/*'],
      description: 'Prevent multiple login failures to mitigate brute force attacks',
      paused: false,
      priority: 5,
    });
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.firewall.lockdowns.update('372e67954025e0ba6aaa6d586b9e0b59', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      configurations: [{}],
      urls: ['shop.example.com/*'],
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
      configurations: [{ target: 'ip', value: '198.51.100.4' }],
      urls: ['shop.example.com/*'],
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
};
describe('resource lockdowns', () => runTests(client));
describe('resource lockdowns (tree shakable, base)', () => runTests(partialClient));
describe('resource lockdowns (tree shakable, subresource)', () => runTests(parentPartialClient));
