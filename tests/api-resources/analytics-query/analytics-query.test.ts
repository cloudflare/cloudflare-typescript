// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { BaseAnalyticsQuery } from 'cloudflare/resources/analytics-query/analytics-query';

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
  resources: [BaseAnalyticsQuery],
});

const runTests = (client: PartialCloudflare<{ analyticsQuery: BaseAnalyticsQuery }>) => {
  test('summary: only required params', async () => {
    const responsePromise = client.analyticsQuery.summary('access-logins', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      filters: [
        {
          name: 'country',
          op: 'in',
          values: ['US', 'CA', 'GB'],
        },
      ],
      from: '2024-11-01T00:00:00Z',
      groupBy: ['string'],
      stats: ['attemptsTotal'],
      to: '2024-11-08T00:00:00Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('summary: required and optional params', async () => {
    const response = await client.analyticsQuery.summary('access-logins', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      filters: [
        {
          name: 'country',
          op: 'in',
          values: ['US', 'CA', 'GB'],
        },
      ],
      from: '2024-11-01T00:00:00Z',
      groupBy: ['string'],
      stats: ['attemptsTotal'],
      to: '2024-11-08T00:00:00Z',
    });
  });

  test('timeseries: only required params', async () => {
    const responsePromise = client.analyticsQuery.timeseries('shadow_it', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      filters: [
        {
          name: 'allowed',
          op: 'eq',
          values: [true],
        },
      ],
      from: '2024-11-01T00:00:00Z',
      groupBy: ['country', 'allowed'],
      resolution: 'day',
      stats: ['attemptsTotal'],
      to: '2024-11-08T00:00:00Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('timeseries: required and optional params', async () => {
    const response = await client.analyticsQuery.timeseries('shadow_it', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      filters: [
        {
          name: 'allowed',
          op: 'eq',
          values: [true],
        },
      ],
      from: '2024-11-01T00:00:00Z',
      groupBy: ['country', 'allowed'],
      resolution: 'day',
      stats: ['attemptsTotal'],
      to: '2024-11-08T00:00:00Z',
    });
  });

  test('topN: only required params', async () => {
    const responsePromise = client.analyticsQuery.topN('gateway-http', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      filters: [
        {
          name: 'country',
          op: 'in',
          values: ['US', 'CA', 'GB'],
        },
      ],
      from: '2024-11-05T00:00:00Z',
      groupBy: ['appName', 'appCategory'],
      n: 10,
      orderBy: 'bytesTotal',
      stats: ['bytesTotal', 'requestsTotal'],
      to: '2024-11-06T00:00:00Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('topN: required and optional params', async () => {
    const response = await client.analyticsQuery.topN('gateway-http', {
      account_id: '023e105f4ecef8ad9ca31a8372d0c353',
      filters: [
        {
          name: 'country',
          op: 'in',
          values: ['US', 'CA', 'GB'],
        },
      ],
      from: '2024-11-05T00:00:00Z',
      groupBy: ['appName', 'appCategory'],
      n: 10,
      orderBy: 'bytesTotal',
      stats: ['bytesTotal', 'requestsTotal'],
      to: '2024-11-06T00:00:00Z',
    });
  });
};
describe('resource analyticsQuery', () => runTests(client));
describe('resource analyticsQuery (tree shakable, base)', () => runTests(partialClient));
