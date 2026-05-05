// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { ContentScanning } from 'cloudflare/resources/content-scanning/content-scanning';
import { BasePayloads } from 'cloudflare/resources/content-scanning/payloads';

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
  resources: [BasePayloads],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [ContentScanning],
});

const runTests = (client: PartialCloudflare<{ contentScanning: { payloads: BasePayloads } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.contentScanning.payloads.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [{ payload: 'lookup_json_string(http.request.body.raw, "file")' }],
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
    const response = await client.contentScanning.payloads.create({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: [{ payload: 'lookup_json_string(http.request.body.raw, "file")' }],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.contentScanning.payloads.list({
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

  test('list: required and optional params', async () => {
    const response = await client.contentScanning.payloads.list({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.contentScanning.payloads.delete('a350a054caa840c9becd89c3b4f0195b', {
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
    const response = await client.contentScanning.payloads.delete('a350a054caa840c9becd89c3b4f0195b', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource payloads', () => runTests(client));
describe('resource payloads (tree shakable, base)', () => runTests(partialClient));
describe('resource payloads (tree shakable, subresource)', () => runTests(parentPartialClient));
