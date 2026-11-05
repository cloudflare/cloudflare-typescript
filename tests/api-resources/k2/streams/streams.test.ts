// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { K2 } from 'cloudflare/resources/k2/k2';
import { BaseStreams } from 'cloudflare/resources/k2/streams/streams';

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
  resources: [BaseStreams],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [K2],
});

const runTests = (client: PartialCloudflare<{ k2: { streams: BaseStreams } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.k2.streams.create({
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
      name: 'my_k2_stream',
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
    const response = await client.k2.streams.create({
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
      name: 'my_k2_stream',
      http: {
        enabled: true,
        authentication: true,
        cors: { origins: ['string'] },
      },
      retention_seconds: 3600,
      worker_binding: { enabled: true },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.k2.streams.update('053e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.k2.streams.update('053e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
      http: {
        enabled: true,
        authentication: true,
        cors: { origins: ['string'] },
      },
      retention_seconds: 3600,
      worker_binding: { enabled: true },
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.k2.streams.list({ account_id: '0123105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.k2.streams.list({
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
      name: 'x',
      page: 1,
      per_page: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.k2.streams.delete('053e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.k2.streams.delete('053e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.k2.streams.get('053e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
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
    const response = await client.k2.streams.get('053e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '0123105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource streams', () => runTests(client));
describe('resource streams (tree shakable, base)', () => runTests(partialClient));
describe('resource streams (tree shakable, subresource)', () => runTests(parentPartialClient));
