// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aiGateway', () => {
  test('create: only required params', async () => {
    const responsePromise = client.aiGateway.create({
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      id: 'my-gateway',
      cache_invalidate_on_update: true,
      cache_ttl: 0,
      collect_logs: true,
      rate_limiting_interval: 0,
      rate_limiting_limit: 0,
      rate_limiting_technique: 'fixed',
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
    const response = await client.aiGateway.create({
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      id: 'my-gateway',
      cache_invalidate_on_update: true,
      cache_ttl: 0,
      collect_logs: true,
      rate_limiting_interval: 0,
      rate_limiting_limit: 0,
      rate_limiting_technique: 'fixed',
      improved_logs: true,
      logpush: true,
      logpush_public_key: 'xxxxxxxxxxxxxxxx',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = client.aiGateway.update('my-gateway', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      cache_invalidate_on_update: true,
      cache_ttl: 0,
      collect_logs: true,
      rate_limiting_interval: 0,
      rate_limiting_limit: 0,
      rate_limiting_technique: 'fixed',
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
    const response = await client.aiGateway.update('my-gateway', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      cache_invalidate_on_update: true,
      cache_ttl: 0,
      collect_logs: true,
      rate_limiting_interval: 0,
      rate_limiting_limit: 0,
      rate_limiting_technique: 'fixed',
      improved_logs: true,
      logpush: true,
      logpush_public_key: 'xxxxxxxxxxxxxxxx',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.aiGateway.list({ account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.aiGateway.list({
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
      id: 'my-gateway',
      order_by: 'order_by',
      page: 1,
      per_page: 5,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.aiGateway.delete('id', { account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: required and optional params', async () => {
    const response = await client.aiGateway.delete('id', { account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0' });
  });

  test('get: only required params', async () => {
    const responsePromise = client.aiGateway.get('my-gateway', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
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
    const response = await client.aiGateway.get('my-gateway', {
      account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
    });
  });
});
