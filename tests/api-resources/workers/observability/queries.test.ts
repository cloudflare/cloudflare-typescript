// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource queries', () => {
  // HTTP 422 error from prism
  test.skip('create: only required params', async () => {
    const responsePromise = client.workers.observability.queries.create({
      account_id: 'account_id',
      description: 'Query description',
      name: 'x',
      parameters: {},
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 422 error from prism
  test.skip('create: required and optional params', async () => {
    const response = await client.workers.observability.queries.create({
      account_id: 'account_id',
      description: 'Query description',
      name: 'x',
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
            filters: [],
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
    });
  });

  test('list: only required params', async () => {
    const responsePromise = client.workers.observability.queries.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await client.workers.observability.queries.list({
      account_id: 'account_id',
      order: 'asc',
      orderBy: 'created',
      page: 1,
      perPage: 5,
    });
  });
});
