// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Buckets } from 'cloudflare/resources/r2/buckets/buckets';
import { BaseObjects } from 'cloudflare/resources/r2/buckets/objects';

import Cloudflare, { toFile } from 'cloudflare';
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
  resources: [BaseObjects],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Buckets],
});

const runTests = (client: PartialCloudflare<{ r2: { buckets: { objects: BaseObjects } } }>) => {
  // HTTP 404 error from prism
  test.skip('list: only required params', async () => {
    const responsePromise = client.r2.buckets.objects.list('example-bucket', {
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

  // HTTP 404 error from prism
  test.skip('list: required and optional params', async () => {
    const response = await client.r2.buckets.objects.list('example-bucket', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      cursor: 'cursor',
      delimiter: 'delimiter',
      per_page: 1,
      prefix: 'prefix',
      start_after: 'start_after',
      jurisdiction: 'default',
    });
  });

  // HTTP 404 error from prism
  test.skip('delete: only required params', async () => {
    const responsePromise = client.r2.buckets.objects.delete('path/to/my-object.txt', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      bucket_name: 'example-bucket',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 404 error from prism
  test.skip('delete: required and optional params', async () => {
    const response = await client.r2.buckets.objects.delete('path/to/my-object.txt', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      bucket_name: 'example-bucket',
      jurisdiction: 'default',
    });
  });

  // Mock server doesn't support application/octet-stream responses
  test.skip('get: required and optional params', async () => {
    const response = await client.r2.buckets.objects.get('path/to/my-object.txt', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      bucket_name: 'example-bucket',
      jurisdiction: 'default',
      'If-Modified-Since': 'If-Modified-Since',
      'If-None-Match': 'If-None-Match',
    });
  });

  // HTTP 404 error from prism
  test.skip('upload: only required params', async () => {
    const responsePromise = client.r2.buckets.objects.upload(
      'path/to/my-object.txt',
      await toFile(Buffer.from('Example data'), 'README.md'),
      { account_id: '023e105f4ecef8ad9ca31a8372d0c353', bucket_name: 'example-bucket' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 404 error from prism
  test.skip('upload: required and optional params', async () => {
    const response = await client.r2.buckets.objects.upload(
      'path/to/my-object.txt',
      await toFile(Buffer.from('Example data'), 'README.md'),
      {
        account_id: '023e105f4ecef8ad9ca31a8372d0c353',
        bucket_name: 'example-bucket',
        jurisdiction: 'default',
        'cf-r2-storage-class': 'Standard',
      },
    );
  });
};
describe('resource objects', () => runTests(client));
describe('resource objects (tree shakable, base)', () => runTests(partialClient));
describe('resource objects (tree shakable, subresource)', () => runTests(parentPartialClient));
