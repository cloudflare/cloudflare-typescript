// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cloudforce-one/events',
  operationId: 'get_EventListGet',
};

export const tool: Tool = {
  name: 'list_cloudforce_one_threat_events',
  description:
    'The `datasetId` must be defined (to list existing datasets (and their IDs), use the [`List Datasets`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/list/) endpoint). Also, must provide query parameters.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'number',
        description: 'Account ID.',
      },
      datasetId: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      forceRefresh: {
        type: 'boolean',
      },
      order: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      orderBy: {
        type: 'string',
      },
      page: {
        type: 'number',
      },
      pageSize: {
        type: 'number',
      },
      search: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            field: {
              type: 'string',
            },
            op: {
              type: 'string',
              enum: [
                'equals',
                'not',
                'gt',
                'gte',
                'lt',
                'lte',
                'like',
                'contains',
                'startsWith',
                'endsWith',
                'in',
                'find',
              ],
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
                  type: 'array',
                  items: {
                    anyOf: [
                      {
                        type: 'string',
                      },
                      {
                        type: 'number',
                      },
                    ],
                  },
                },
              ],
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.cloudforceOne.threatEvents.list(body);
};

export default { metadata, tool, handler };
