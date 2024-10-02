// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource logs', () => {
  test('list: only required params', async () => {
    const responsePromise = client.aiGateway.logs.list('my-gateway', {
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

  test('list: required and optional params', async () => {
    const response = await client.aiGateway.logs.list('my-gateway', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      cached: true,
      direction: 'asc',
      end_date: '2019-12-27T18:11:19.117Z',
      feedback: 0,
      filters: [
        { key: 'created_at', operator: 'eq', value: ['string', 'string', 'string'] },
        { key: 'created_at', operator: 'eq', value: ['string', 'string', 'string'] },
        { key: 'created_at', operator: 'eq', value: ['string', 'string', 'string'] },
      ],
      max_cost: 0,
      max_duration: 0,
      max_tokens_in: 0,
      max_tokens_out: 0,
      max_total_tokens: 0,
      meta_info: true,
      min_cost: 0,
      min_duration: 0,
      min_tokens_in: 0,
      min_tokens_out: 0,
      min_total_tokens: 0,
      model: 'model',
      model_type: 'model_type',
      order_by: 'created_at',
      order_by_direction: 'asc',
      page: 1,
      per_page: 1,
      provider: 'provider',
      request_content_type: 'request_content_type',
      response_content_type: 'response_content_type',
      search: 'search',
      start_date: '2019-12-27T18:11:19.117Z',
      success: true,
    });
  });

  test('delete: only required params', async () => {
    const responsePromise = client.aiGateway.logs.delete('my-gateway', {
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
    const response = await client.aiGateway.logs.delete('my-gateway', {
      account_id: '0d37909e38d3e99c29fa2cd343ac421a',
      filters: [
        { key: 'created_at', operator: 'eq', value: ['string', 'string', 'string'] },
        { key: 'created_at', operator: 'eq', value: ['string', 'string', 'string'] },
        { key: 'created_at', operator: 'eq', value: ['string', 'string', 'string'] },
      ],
      limit: 1,
      order_by: 'created_at',
      order_by_direction: 'asc',
    });
  });
});
