// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource destinations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.workers.observability.destinations.create({
      account_id: 'account_id',
      configuration: {
        headers: { foo: 'string' },
        logpushDataset: 'opentelemetry-traces',
        type: 'logpush',
        url: 'url',
      },
      enabled: true,
      name: 'name',
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
    const response = await client.workers.observability.destinations.create({
      account_id: 'account_id',
      configuration: {
        headers: { foo: 'string' },
        logpushDataset: 'opentelemetry-traces',
        type: 'logpush',
        url: 'url',
      },
      enabled: true,
      name: 'name',
      skipPreflightCheck: true,
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.workers.observability.destinations.update('slug', {
      account_id: 'account_id',
      configuration: {
        headers: { foo: 'string' },
        type: 'logpush',
        url: 'url',
      },
      enabled: true,
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
    const response = await client.workers.observability.destinations.update('slug', {
      account_id: 'account_id',
      configuration: {
        headers: { foo: 'string' },
        type: 'logpush',
        url: 'url',
      },
      enabled: true,
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.workers.observability.destinations.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.workers.observability.destinations.list({
      account_id: 'account_id',
      order: 'asc',
      orderBy: 'created',
      page: 1,
      perPage: 5,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.workers.observability.destinations.delete('slug', {
      account_id: 'account_id',
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
    const response = await client.workers.observability.destinations.delete('slug', {
      account_id: 'account_id',
    });
  });
});
