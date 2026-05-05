// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { CustomHostnames } from 'cloudflare/resources/custom-hostnames/custom-hostnames';
import { BaseFallbackOrigin } from 'cloudflare/resources/custom-hostnames/fallback-origin';

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
  resources: [BaseFallbackOrigin],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [CustomHostnames],
});

const runTests = (client: PartialCloudflare<{ customHostnames: { fallbackOrigin: BaseFallbackOrigin } }>) => {
  test('update: only required params', async () => {
    const responsePromise = client.customHostnames.fallbackOrigin.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      origin: 'fallback.example.com',
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
    const response = await client.customHostnames.fallbackOrigin.update({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      origin: 'fallback.example.com',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.customHostnames.fallbackOrigin.delete({
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
    const response = await client.customHostnames.fallbackOrigin.delete({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.customHostnames.fallbackOrigin.get({
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
    const response = await client.customHostnames.fallbackOrigin.get({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource fallbackOrigin', () => runTests(client));
describe('resource fallbackOrigin (tree shakable, base)', () => runTests(partialClient));
describe('resource fallbackOrigin (tree shakable, subresource)', () => runTests(parentPartialClient));
