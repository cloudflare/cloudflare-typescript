// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseDownloads } from 'cloudflare/resources/stream/downloads';
import { Stream } from 'cloudflare/resources/stream/stream';

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
  resources: [BaseDownloads],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Stream],
});

const runTests = (client: PartialCloudflare<{ stream: { downloads: BaseDownloads } }>) => {
  // SKIP: prism 415 Unsupported Media Type
  test.skip('create: only required params', async () => {
    const responsePromise = client.stream.downloads.create('ea95132c15732412d22c1476fa83f27a', {
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

  // SKIP: prism 415 Unsupported Media Type
  test.skip('create: required and optional params', async () => {
    const response = await client.stream.downloads.create('ea95132c15732412d22c1476fa83f27a', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // SKIP: prism 415 Unsupported Media Type
  test.skip('delete: only required params', async () => {
    const responsePromise = client.stream.downloads.delete('ea95132c15732412d22c1476fa83f27a', {
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

  // SKIP: prism 415 Unsupported Media Type
  test.skip('delete: required and optional params', async () => {
    const response = await client.stream.downloads.delete('ea95132c15732412d22c1476fa83f27a', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  // SKIP: prism 415 Unsupported Media Type
  test.skip('get: only required params', async () => {
    const responsePromise = client.stream.downloads.get('ea95132c15732412d22c1476fa83f27a', {
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

  // SKIP: prism 415 Unsupported Media Type
  test.skip('get: required and optional params', async () => {
    const response = await client.stream.downloads.get('ea95132c15732412d22c1476fa83f27a', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource downloads', () => runTests(client));
describe('resource downloads (tree shakable, base)', () => runTests(partialClient));
describe('resource downloads (tree shakable, subresource)', () => runTests(parentPartialClient));
