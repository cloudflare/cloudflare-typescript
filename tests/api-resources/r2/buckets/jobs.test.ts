// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Buckets } from 'cloudflare/resources/r2/buckets/buckets';
import { BaseJobs } from 'cloudflare/resources/r2/buckets/jobs';

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
  resources: [BaseJobs],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Buckets],
});

const runTests = (client: PartialCloudflare<{ r2: { buckets: { jobs: BaseJobs } } }>) => {
  test('create: only required params', async () => {
    const responsePromise = client.r2.buckets.jobs.create('example-bucket', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      jobType: 'prefixDelete',
      prefix: 'path/to/',
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
    const response = await client.r2.buckets.jobs.create('example-bucket', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      jobType: 'prefixDelete',
      prefix: 'path/to/',
      'cf-r2-data-catalog-check': 'cf-r2-data-catalog-check',
      'cf-r2-jurisdiction': 'default',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.r2.buckets.jobs.list('example-bucket', {
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
    const response = await client.r2.buckets.jobs.list('example-bucket', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      continuationToken: 'continuationToken',
      jobType: 'prefixDelete',
      maxKeys: 0,
      status: 'ENQUEUED',
      'cf-r2-jurisdiction': 'default',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.r2.buckets.jobs.get('job_id', {
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

  test('get: required and optional params', async () => {
    const response = await client.r2.buckets.jobs.get('job_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      bucket_name: 'example-bucket',
      'cf-r2-jurisdiction': 'default',
    });
  });
};
describe('resource jobs', () => runTests(client));
describe('resource jobs (tree shakable, base)', () => runTests(partialClient));
describe('resource jobs (tree shakable, subresource)', () => runTests(parentPartialClient));
