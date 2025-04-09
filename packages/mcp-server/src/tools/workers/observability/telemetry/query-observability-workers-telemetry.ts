// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.observability.telemetry',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'query_observability_workers_telemetry',
  description: 'Runs a temporary or saved query',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      queryId: {
        type: 'string',
      },
      timeframe: {
        type: 'object',
        properties: {
          from: {
            type: 'number',
          },
          to: {
            type: 'number',
          },
        },
        required: ['from', 'to'],
      },
      chart: {
        type: 'boolean',
      },
      compare: {
        type: 'boolean',
      },
      dry: {
        type: 'boolean',
      },
      granularity: {
        type: 'number',
      },
      ignoreSeries: {
        type: 'boolean',
      },
      limit: {
        type: 'number',
      },
      offset: {
        type: 'string',
      },
      offsetBy: {
        type: 'number',
      },
      offsetDirection: {
        type: 'string',
      },
      parameters: {
        type: 'object',
        properties: {
          calculations: {
            type: 'array',
            description: 'Create Calculations to compute as part of the query.',
            items: {
              type: 'object',
              properties: {
                operator: {
                  type: 'string',
                  enum: [
                    'uniq',
                    'count',
                    'max',
                    'min',
                    'sum',
                    'avg',
                    'median',
                    'p001',
                    'p01',
                    'p05',
                    'p10',
                    'p25',
                    'p75',
                    'p90',
                    'p95',
                    'p99',
                    'p999',
                    'stddev',
                    'variance',
                    'COUNT_DISTINCT',
                    'COUNT',
                    'MAX',
                    'MIN',
                    'SUM',
                    'AVG',
                    'MEDIAN',
                    'P001',
                    'P01',
                    'P05',
                    'P10',
                    'P25',
                    'P75',
                    'P90',
                    'P95',
                    'P99',
                    'P999',
                    'STDDEV',
                    'VARIANCE',
                  ],
                },
                alias: {
                  type: 'string',
                },
                key: {
                  type: 'string',
                },
                keyType: {
                  type: 'string',
                  enum: ['string', 'number', 'boolean'],
                },
              },
              required: ['operator'],
            },
          },
          datasets: {
            type: 'array',
            description: 'Set the Datasets to query. Leave it empty to query all the datasets.',
            items: {
              type: 'string',
            },
          },
          filterCombination: {
            type: 'string',
            description: 'Set a Flag to describe how to combine the filters on the query.',
            enum: ['and', 'or', 'AND', 'OR'],
          },
          filters: {
            type: 'array',
            description: 'Configure the Filters to apply to the query.',
            items: {
              type: 'object',
              properties: {
                key: {
                  type: 'string',
                },
                operation: {
                  type: 'string',
                  enum: [
                    'includes',
                    'not_includes',
                    'starts_with',
                    'regex',
                    'exists',
                    'is_null',
                    'in',
                    'not_in',
                    'eq',
                    'neq',
                    'gt',
                    'gte',
                    'lt',
                    'lte',
                    '=',
                    '!=',
                    '>',
                    '>=',
                    '<',
                    '<=',
                    'INCLUDES',
                    'DOES_NOT_INCLUDE',
                    'MATCH_REGEX',
                    'EXISTS',
                    'DOES_NOT_EXIST',
                    'IN',
                    'NOT_IN',
                    'STARTS_WITH',
                  ],
                },
                type: {
                  type: 'string',
                  enum: ['string', 'number', 'boolean'],
                },
                value: {
                  anyOf: [
                    {
                      type: 'string',
                    },
                    {
                      type: 'number',
                    },
                    {
                      type: 'boolean',
                    },
                  ],
                },
              },
              required: ['key', 'operation', 'type'],
            },
          },
          groupBys: {
            type: 'array',
            description: 'Define how to group the results of the query.',
            items: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  enum: ['string', 'number', 'boolean'],
                },
                value: {
                  type: 'string',
                },
              },
              required: ['type', 'value'],
            },
          },
          havings: {
            type: 'array',
            description: 'Configure the Having clauses that filter on calculations in the query result.',
            items: {
              type: 'object',
              properties: {
                key: {
                  type: 'string',
                },
                operation: {
                  type: 'string',
                  enum: ['eq', 'neq', 'gt', 'gte', 'lt', 'lte'],
                },
                value: {
                  type: 'number',
                },
              },
              required: ['key', 'operation', 'value'],
            },
          },
          limit: {
            type: 'integer',
            description: 'Set a limit on the number of results / records returned by the query',
          },
          needle: {
            type: 'object',
            description: 'Define an expression to search using full-text search.',
            properties: {
              value: {
                anyOf: [
                  {
                    type: 'string',
                  },
                  {
                    type: 'number',
                  },
                  {
                    type: 'boolean',
                  },
                ],
              },
              isRegex: {
                type: 'boolean',
              },
              matchCase: {
                type: 'boolean',
              },
            },
            required: ['value'],
          },
          orderBy: {
            type: 'object',
            description: 'Configure the order of the results returned by the query.',
            properties: {
              value: {
                type: 'string',
                description: 'Configure which Calculation to order the results by.',
              },
              order: {
                type: 'string',
                description: 'Set the order of the results',
                enum: ['asc', 'desc'],
              },
            },
            required: ['value'],
          },
        },
        required: [],
      },
      patternType: {
        type: 'string',
        enum: ['message', 'error'],
      },
      view: {
        type: 'string',
        enum: ['traces', 'events', 'calculations', 'invocations', 'requests', 'patterns'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.workers.observability.telemetry.query(body);
};

export default { metadata, tool, handler };
