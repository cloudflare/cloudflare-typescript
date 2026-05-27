// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource telemetry', () => {
  // HTTP 400 error from prism
  test.skip('keys: only required params', async () => {
    const responsePromise = client.workers.observability.telemetry.keys({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 400 error from prism
  test.skip('keys: required and optional params', async () => {
    const response = await client.workers.observability.telemetry.keys({
      account_id: 'account_id',
      datasets: ['string'],
      filters: [
        {
          filterCombination: 'and',
          filters: [
            {
              filterCombination: 'and',
              filters: [{}],
              kind: 'group',
            },
          ],
          kind: 'group',
        },
      ],
      from: 0,
      keyNeedle: {
        value: 'string',
        isRegex: true,
        matchCase: true,
      },
      limit: 0,
      needle: {
        value: 'string',
        isRegex: true,
        matchCase: true,
      },
      to: 0,
    });
  });

  // HTTP 400 error from prism
  test.skip('liveTail: only required params', async () => {
    const responsePromise = client.workers.observability.telemetry.liveTail({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // HTTP 400 error from prism
  test.skip('liveTail: required and optional params', async () => {
    const response = await client.workers.observability.telemetry.liveTail({
      account_id: 'account_id',
      filterCombination: 'and',
      filters: [
        {
          filterCombination: 'and',
          filters: [
            {
              filterCombination: 'and',
              filters: [{}],
              kind: 'group',
            },
          ],
          kind: 'group',
        },
      ],
      scriptId: 'scriptId',
    });
  });

  // HTTP 400 error from prism
  test.skip('liveTailHeartbeat: only required params', async () => {
    const responsePromise = client.workers.observability.telemetry.liveTailHeartbeat({
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

  // HTTP 400 error from prism
  test.skip('liveTailHeartbeat: required and optional params', async () => {
    const response = await client.workers.observability.telemetry.liveTailHeartbeat({
      account_id: 'account_id',
      scriptId: 'scriptId',
    });
  });

  // HTTP 400 error from prism
  test.skip('query: only required params', async () => {
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

  // HTTP 400 error from prism
  test.skip('query: required and optional params', async () => {
    const response = await client.workers.observability.telemetry.query({
      account_id: 'account_id',
      queryId: 'queryId',
      timeframe: { from: 0, to: 0 },
      chart: true,
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
                filters: [{}],
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

  // HTTP 400 error from prism
  test.skip('values: only required params', async () => {
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

  // HTTP 400 error from prism
  test.skip('values: required and optional params', async () => {
    const response = await client.workers.observability.telemetry.values({
      account_id: 'account_id',
      datasets: ['string'],
      key: 'key',
      timeframe: { from: 0, to: 0 },
      type: 'string',
      filters: [
        {
          filterCombination: 'and',
          filters: [
            {
              filterCombination: 'and',
              filters: [{}],
              kind: 'group',
            },
          ],
          kind: 'group',
        },
      ],
      limit: 0,
      needle: {
        value: 'string',
        isRegex: true,
        matchCase: true,
      },
    });
  });
});
