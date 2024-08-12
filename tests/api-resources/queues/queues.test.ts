// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource queues', () => {
  test('create: only required params', async () => {
    const responsePromise = client.queues.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      queue_name: 'example-queue',
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
    const response = await client.queues.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      queue_name: 'example-queue',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.queues.update('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: { queue_name: 'renamed-example-queue' },
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
    const response = await client.queues.update('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      body: { queue_name: 'renamed-example-queue' },
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.queues.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.queues.list({ account_id: '023e105f4ecef8ad9ca31a8372d0c353' });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.queues.delete('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.queues.delete('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.queues.get('023e105f4ecef8ad9ca31a8372d0c353', {
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
    const response = await client.queues.get('023e105f4ecef8ad9ca31a8372d0c353', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
