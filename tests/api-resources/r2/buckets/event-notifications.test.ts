// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource eventNotifications', () => {
  // TODO: investigate auth errors on test suite
  test.skip('update: only required params', async () => {
    const responsePromise = client.r2.buckets.eventNotifications.update('example-bucket', 'queue_id', {
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
  test.skip('update: required and optional params', async () => {
    const response = await client.r2.buckets.eventNotifications.update('example-bucket', 'queue_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
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
    const responsePromise = client.r2.buckets.eventNotifications.delete('example-bucket', 'queue_id', {
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.r2.buckets.eventNotifications.delete('example-bucket', 'queue_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      jurisdiction: 'default',
    });
  });

  // TODO: investigate auth errors on test suite
  test.skip('get: only required params', async () => {
    const responsePromise = client.r2.buckets.eventNotifications.get('example-bucket', 'queue_id', {
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
  test.skip('get: required and optional params', async () => {
    const response = await client.r2.buckets.eventNotifications.get('example-bucket', 'queue_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      jurisdiction: 'default',
    });
  });
});
