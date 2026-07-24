// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Observability } from 'cloudflare/resources/workers/observability/observability';
import { BaseSharedQueries } from 'cloudflare/resources/workers/observability/shared-queries';

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
  resources: [BaseSharedQueries],
});

const parentPartialClient = createClient({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
  resources: [Observability],
});

const runTests = (
  client: PartialCloudflare<{ workers: { observability: { sharedQueries: BaseSharedQueries } } }>,
) => {
  // HTTP 400 error from prism
  test.skip('create: only required params', async () => {
    const responsePromise = client.workers.observability.sharedQueries.create({
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

  // HTTP 400 error from prism
  test.skip('create: required and optional params', async () => {
    const response = await client.workers.observability.sharedQueries.create({
      account_id: 'account_id',
      queryId: 'queryId',
      timeframe: { from: 0, to: 0 },
      chart: true,
      chartType: 'timeseries_and_aggregate',
      compare: true,
      dry: true,
      granularity: 0,
      ignoreSeries: true,
      limit: 2000,
      offset: 'offset',
      offsetBy: 0,
      offsetDirection: 'offsetDirection',
      parameters: {
        calculations: [
          {
            operator: 'uniq',
            alias: 'alias',
            key: 'key',
            keyType: 'string',
          },
        ],
        datasets: ['string'],
        filterCombination: 'and',
        filters: [
          {
            filterCombination: 'and',
            filters: [
              {
                filterCombination: 'and',
                filters: [],
                kind: 'group',
              },
            ],
            kind: 'group',
          },
        ],
        groupBys: [{ type: 'string', value: 'value' }],
        havings: [
          {
            key: 'key',
            operation: 'eq',
            value: 0,
          },
        ],
        limit: 0,
        needle: {
          value: 'string',
          isRegex: true,
          matchCase: true,
        },
        orderBy: { value: 'value', order: 'asc' },
      },
      view: 'traces',
    });
  });

  test('get: only required params', async () => {
    const responsePromise = client.workers.observability.sharedQueries.get('id', {
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

  test('get: required and optional params', async () => {
    const response = await client.workers.observability.sharedQueries.get('id', {
      account_id: 'account_id',
      view: 'events',
    });
  });
};
describe('resource sharedQueries', () => runTests(client));
describe('resource sharedQueries (tree shakable, base)', () => runTests(partialClient));
describe('resource sharedQueries (tree shakable, subresource)', () => runTests(parentPartialClient));
