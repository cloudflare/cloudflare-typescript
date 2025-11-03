// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource telemetry', () => {
  test('keys: only required params', async () => {
    const responsePromise = client.workers.observability.telemetry.keys({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('keys: required and optional params', async () => {
    const response = await client.workers.observability.telemetry.keys({
      account_id: 'account_id',
      datasets: ['string'],
      filters: [{ key: 'key', operation: 'includes', type: 'string', value: 'string' }],
      keyNeedle: { value: 'string', isRegex: true, matchCase: true },
      limit: 0,
      needle: { value: 'string', isRegex: true, matchCase: true },
      timeframe: { from: 0, to: 0 },
    });
  });

  test('query: only required params', async () => {
    const responsePromise = client.workers.observability.telemetry.query({
      account_id: 'account_id',
      queryId: 'queryId',
      timeframe: { from: 0, to: 0 },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('query: required and optional params', async () => {
    const response = await client.workers.observability.telemetry.query({
      account_id: 'account_id',
      queryId: 'queryId',
      timeframe: { from: 0, to: 0 },
      chart: true,
      compare: true,
      dry: true,
      granularity: 0,
      ignoreSeries: true,
      limit: 100,
      offset: 'offset',
      offsetBy: 0,
      offsetDirection: 'offsetDirection',
      parameters: {
        calculations: [{ operator: 'uniq', alias: 'alias', key: 'key', keyType: 'string' }],
        datasets: ['string'],
        filterCombination: 'and',
        filters: [{ key: 'key', operation: 'includes', type: 'string', value: 'string' }],
        groupBys: [{ type: 'string', value: 'value' }],
        havings: [{ key: 'key', operation: 'eq', value: 0 }],
        limit: 0,
        needle: { value: 'string', isRegex: true, matchCase: true },
        orderBy: { value: 'value', order: 'asc' },
      },
      patternType: 'message',
      view: 'traces',
    });
  });

  test('values: only required params', async () => {
    const responsePromise = client.workers.observability.telemetry.values({
      account_id: 'account_id',
      datasets: ['string'],
      key: 'key',
      timeframe: { from: 0, to: 0 },
      type: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('values: required and optional params', async () => {
    const response = await client.workers.observability.telemetry.values({
      account_id: 'account_id',
      datasets: ['string'],
      key: 'key',
      timeframe: { from: 0, to: 0 },
      type: 'string',
      filters: [{ key: 'key', operation: 'includes', type: 'string', value: 'string' }],
      limit: 0,
      needle: { value: 'string', isRegex: true, matchCase: true },
    });
  });
});
