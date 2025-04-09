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
  name: 'values_observability_workers_telemetry',
  description: 'List unique values found in your events',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      datasets: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      key: {
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
      type: {
        type: 'string',
        enum: ['string', 'boolean', 'number'],
      },
      filters: {
        type: 'array',
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
      limit: {
        type: 'number',
      },
      needle: {
        type: 'object',
        description: 'Search for a specific substring in the event.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.workers.observability.telemetry.values(body);
};

export default { metadata, tool, handler };
