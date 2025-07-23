// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.observability.telemetry',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/workers/observability/telemetry/keys',
  operationId: 'telemetry.keys.list',
};

export const tool: Tool = {
  name: 'keys_observability_workers_telemetry',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all the keys in your telemetry events.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          message: {\n            type: 'string',\n            enum: [              'Successful request'\n            ]\n          }\n        },\n        required: [          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          key: {\n            type: 'string'\n          },\n          lastSeenAt: {\n            type: 'number'\n          },\n          type: {\n            type: 'string',\n            enum: [              'string',\n              'boolean',\n              'number'\n            ]\n          }\n        },\n        required: [          'key',\n          'lastSeenAt',\n          'type'\n        ]\n      }\n    },\n    success: {\n      type: 'string',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ]\n}\n```",
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
      keyNeedle: {
        type: 'object',
        description: 'Search for a specific substring in the keys.',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.workers.observability.telemetry.keys(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
