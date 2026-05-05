// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Cache } from 'cloudflare/resources/cache/cache';
import { BaseVariants } from 'cloudflare/resources/cache/variants';

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
  resources: [Cache],
});

const runTests = (client: PartialCloudflare<{ cache: { variants: BaseVariants } }>) => {
  test('delete: only required params', async () => {
    const responsePromise = client.cache.variants.delete({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.cache.variants.delete({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  // TODO: investigate HTTP 422 errors on test suite
  test.skip('edit: only required params', async () => {
    const responsePromise = client.cache.variants.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      value: {},
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate HTTP 422 errors on test suite
  test.skip('edit: required and optional params', async () => {
    const response = await client.cache.variants.edit({
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
      value: {
        avif: ['image/webp', 'image/jpeg'],
        bmp: ['image/webp', 'image/jpeg'],
        gif: ['image/webp', 'image/jpeg'],
        jp2: ['image/webp', 'image/avif'],
        jpeg: ['image/webp', 'image/avif'],
        jpg: ['image/webp', 'image/avif'],
        jpg2: ['image/webp', 'image/avif'],
        png: ['image/webp', 'image/avif'],
        tif: ['image/webp', 'image/avif'],
        tiff: ['image/webp', 'image/avif'],
        webp: ['image/jpeg', 'image/avif'],
      },
    });
  });

  // TODO: investigate HTTP 422 errors on test suite
  test.skip('get: only required params', async () => {
    const responsePromise = client.cache.variants.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate HTTP 422 errors on test suite
  test.skip('get: required and optional params', async () => {
    const response = await client.cache.variants.get({ zone_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });
};
describe('resource variants', () => runTests(client));
describe('resource variants (tree shakable, base)', () => runTests(partialClient));
describe('resource variants (tree shakable, subresource)', () => runTests(parentPartialClient));
