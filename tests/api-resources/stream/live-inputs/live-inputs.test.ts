// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Stream } from 'cloudflare/resources/stream/stream';
import { BaseLiveInputs } from 'cloudflare/resources/stream/live-inputs/live-inputs';

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
  resources: [BaseLiveInputs],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Stream],
});

const runTests = (client: PartialCloudflare<{ stream: { liveInputs: BaseLiveInputs } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.stream.liveInputs.create({
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

  test('create: required and optional params', async () => {
    const response = await client.stream.liveInputs.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      defaultCreator: 'defaultCreator',
      deleteRecordingAfterDays: 45,
      enabled: true,
      meta: { name: 'test stream 1' },
      recording: {
        allowedOrigins: ['example.com'],
        hideLiveViewerCount: false,
        mode: 'off',
        requireSignedURLs: false,
        timeoutSeconds: 0,
      },
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.stream.liveInputs.update('66be4bf738797e01e1fca35a7bdecdcd', {
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

  test('update: required and optional params', async () => {
    const response = await client.stream.liveInputs.update('66be4bf738797e01e1fca35a7bdecdcd', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      defaultCreator: 'defaultCreator',
      deleteRecordingAfterDays: 45,
      enabled: true,
      meta: { name: 'test stream 1' },
      recording: {
        allowedOrigins: ['example.com'],
        hideLiveViewerCount: false,
        mode: 'off',
        requireSignedURLs: false,
        timeoutSeconds: 0,
      },
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.stream.liveInputs.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.stream.liveInputs.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      include_counts: true,
    });
  });

  // TODO: investigate broken test
  test.skip('delete: only required params', async () => {
    const responsePromise = client.stream.liveInputs.delete('66be4bf738797e01e1fca35a7bdecdcd', {
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

  // TODO: investigate broken test
  test.skip('delete: required and optional params', async () => {
    const response = await client.stream.liveInputs.delete('66be4bf738797e01e1fca35a7bdecdcd', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.stream.liveInputs.get('66be4bf738797e01e1fca35a7bdecdcd', {
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

  test('get: required and optional params', async () => {
    const response = await client.stream.liveInputs.get('66be4bf738797e01e1fca35a7bdecdcd', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource liveInputs', () => runTests(client));
describe('resource liveInputs (tree shakable, base)', () => runTests(partialClient));
describe('resource liveInputs (tree shakable, subresource)', () => runTests(parentPartialClient));
