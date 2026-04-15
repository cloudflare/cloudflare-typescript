// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Buckets } from 'cloudflare/resources/r2/buckets/buckets';
import { BaseEventNotifications } from 'cloudflare/resources/r2/buckets/event-notifications';

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
  resources: [BaseEventNotifications],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Buckets],
});

const runTests = (
  client: PartialCloudflare<{ r2: { buckets: { eventNotifications: BaseEventNotifications } } }>,
) => {
  // TODO: investigate auth errors on test suite
  test.skip('update: only required params', async () => {
    const responsePromise = client.r2.buckets.eventNotifications.update('queue_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      bucket_name: 'example-bucket',
      rules: [{ actions: ['PutObject', 'CopyObject'] }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate auth errors on test suite
  test.skip('update: required and optional params', async () => {
    const response = await client.r2.buckets.eventNotifications.update('queue_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      bucket_name: 'example-bucket',
      rules: [
        {
          actions: ['PutObject', 'CopyObject'],
          description: 'Notifications from source bucket to queue',
          prefix: 'img/',
          suffix: '.jpeg',
        },
      ],
      jurisdiction: 'default',
    });
  });

  // TODO: investigate auth errors on test suite
  test.skip('list: only required params', async () => {
    const responsePromise = client.r2.buckets.eventNotifications.list('example-bucket', {
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

  // TODO: investigate auth errors on test suite
  test.skip('list: required and optional params', async () => {
    const response = await client.r2.buckets.eventNotifications.list('example-bucket', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      jurisdiction: 'default',
    });
  });

  // TODO: investigate auth errors on test suite
  test.skip('delete: only required params', async () => {
    const responsePromise = client.r2.buckets.eventNotifications.delete('queue_id', {
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

  // TODO: investigate auth errors on test suite
  test.skip('delete: required and optional params', async () => {
    const response = await client.r2.buckets.eventNotifications.delete('queue_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      bucket_name: 'example-bucket',
      jurisdiction: 'default',
    });
  });

  // TODO: investigate auth errors on test suite
  test.skip('get: only required params', async () => {
    const responsePromise = client.r2.buckets.eventNotifications.get('queue_id', {
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

  // TODO: investigate auth errors on test suite
  test.skip('get: required and optional params', async () => {
    const response = await client.r2.buckets.eventNotifications.get('queue_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      bucket_name: 'example-bucket',
      jurisdiction: 'default',
    });
  });
};
describe('resource eventNotifications', () => runTests(client));
describe('resource eventNotifications (tree shakable, base)', () => runTests(partialClient));
describe('resource eventNotifications (tree shakable, subresource)', () => runTests(parentPartialClient));
