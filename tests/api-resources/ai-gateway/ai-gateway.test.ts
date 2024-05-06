// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const cloudflare = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aiGateway', () => {
  test('create: only required params', async () => {
    const responsePromise = cloudflare.aiGateway.create({
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      cache_invalidate_on_update: true,
      cache_ttl: 0,
      collect_logs: true,
      name: 'string',
      slug: 'string',
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
    const response = await cloudflare.aiGateway.create({
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      cache_invalidate_on_update: true,
      cache_ttl: 0,
      collect_logs: true,
      name: 'string',
      slug: 'string',
      rate_limiting_interval: 0,
      rate_limiting_limit: 0,
      rate_limiting_technique: 'string',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = cloudflare.aiGateway.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      cache_invalidate_on_update: true,
      cache_ttl: 0,
      collect_logs: true,
      name: 'string',
      slug: 'string',
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
    const response = await cloudflare.aiGateway.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      cache_invalidate_on_update: true,
      cache_ttl: 0,
      collect_logs: true,
      name: 'string',
      slug: 'string',
      rate_limiting_interval: 0,
      rate_limiting_limit: 0,
      rate_limiting_technique: 'string',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = cloudflare.aiGateway.list({ account_id: '0d37909e38d3e99c29fa2cd343ac421a' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await cloudflare.aiGateway.list({
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      order_by: 'string',
      page: 1,
      per_page: 5,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = cloudflare.aiGateway.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
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
    const response = await cloudflare.aiGateway.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = cloudflare.aiGateway.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
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
    const response = await cloudflare.aiGateway.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
    });
  });
});
