// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource workers', () => {
  test('create: only required params', async () => {
    const responsePromise = client.workers.beta.workers.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'my-worker',
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
    const response = await client.workers.beta.workers.create({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'my-worker',
      logpush: true,
      observability: {
        enabled: true,
        head_sampling_rate: 1,
        logs: { enabled: true, head_sampling_rate: 1, invocation_logs: true },
      },
      subdomain: { enabled: true, previews_enabled: true },
      tags: ['my-team', 'my-public-api'],
      tail_consumers: [{ name: 'my-tail-consumer' }],
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.workers.beta.workers.update('worker_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'my-worker',
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
    const response = await client.workers.beta.workers.update('worker_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      name: 'my-worker',
      logpush: true,
      observability: {
        enabled: true,
        head_sampling_rate: 1,
        logs: { enabled: true, head_sampling_rate: 1, invocation_logs: true },
      },
      subdomain: { enabled: true, previews_enabled: true },
      tags: ['my-team', 'my-public-api'],
      tail_consumers: [{ name: 'my-tail-consumer' }],
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.workers.beta.workers.list({
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
    const response = await client.workers.beta.workers.list({
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      page: 1,
      per_page: 1,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.workers.beta.workers.delete('worker_id', {
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
    const response = await client.workers.beta.workers.delete('worker_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });

  test('edit: only required params', async () => {
    const responsePromise = client.workers.beta.workers.edit('worker_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      logpush: true,
      name: 'my-worker',
      observability: {},
      subdomain: {},
      tags: ['my-team', 'my-public-api'],
      tail_consumers: [{ name: 'my-tail-consumer' }],
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
    const response = await client.workers.beta.workers.edit('worker_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      logpush: true,
      name: 'my-worker',
      observability: {
        enabled: true,
        head_sampling_rate: 1,
        logs: { enabled: true, head_sampling_rate: 1, invocation_logs: true },
      },
      subdomain: { enabled: true, previews_enabled: true },
      tags: ['my-team', 'my-public-api'],
      tail_consumers: [{ name: 'my-tail-consumer' }],
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.workers.beta.workers.get('worker_id', {
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
    const response = await client.workers.beta.workers.get('worker_id', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
