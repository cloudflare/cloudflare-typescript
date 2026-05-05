// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { V1 } from 'cloudflare/resources/images/v1/v1';
import { BaseVariants } from 'cloudflare/resources/images/v1/variants';

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
  resources: [BaseVariants],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [V1],
});

const runTests = (client: PartialCloudflare<{ images: { v1: { variants: BaseVariants } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.images.v1.variants.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      id: 'hero',
      options: {
        fit: 'scale-down',
        height: 768,
        metadata: 'none',
        width: 1366,
      },
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
    const response = await client.images.v1.variants.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      id: 'hero',
      options: {
        fit: 'scale-down',
        height: 768,
        metadata: 'none',
        width: 1366,
      },
      neverRequireSignedURLs: true,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.images.v1.variants.list({
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

  test('list: required and optional params', async () => {
    const response = await client.images.v1.variants.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.images.v1.variants.delete('hero', {
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

  test('delete: required and optional params', async () => {
    const response = await client.images.v1.variants.delete('hero', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.images.v1.variants.edit('hero', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      options: {
        fit: 'scale-down',
        height: 768,
        metadata: 'none',
        width: 1366,
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('edit: required and optional params', async () => {
    const response = await client.images.v1.variants.edit('hero', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      options: {
        fit: 'scale-down',
        height: 768,
        metadata: 'none',
        width: 1366,
      },
      neverRequireSignedURLs: true,
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.images.v1.variants.get('hero', {
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
    const response = await client.images.v1.variants.get('hero', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
};
describe('resource variants', () => runTests(client));
describe('resource variants (tree shakable, base)', () => runTests(partialClient));
describe('resource variants (tree shakable, subresource)', () => runTests(parentPartialClient));
