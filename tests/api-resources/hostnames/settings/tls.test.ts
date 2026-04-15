// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Settings } from 'cloudflare/resources/hostnames/settings/settings';
import { BaseTLS } from 'cloudflare/resources/hostnames/settings/tls';

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
  resources: [BaseTLS],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Settings],
});

const runTests = (client: PartialCloudflare<{ hostnames: { settings: { tls: BaseTLS } } }>) => {
  test('update: only required params', async () => {
    const responsePromise = client.hostnames.settings.tls.update('app.example.com', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      setting_id: 'ciphers',
      value: '1.0',
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
    const response = await client.hostnames.settings.tls.update('app.example.com', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      setting_id: 'ciphers',
      value: '1.0',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.hostnames.settings.tls.delete('app.example.com', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      setting_id: 'ciphers',
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
    const response = await client.hostnames.settings.tls.delete('app.example.com', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      setting_id: 'ciphers',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.hostnames.settings.tls.get('ciphers', {
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
    const response = await client.hostnames.settings.tls.get('ciphers', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource tls', () => runTests(client));
describe('resource tls (tree shakable, base)', () => runTests(partialClient));
describe('resource tls (tree shakable, subresource)', () => runTests(parentPartialClient));
