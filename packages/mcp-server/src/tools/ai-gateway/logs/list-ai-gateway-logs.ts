// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway.logs',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_ai_gateway_logs',
  description: 'List Gateway Logs',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      gateway_id: {
        type: 'string',
        description: 'gateway id',
      },
      cached: {
        type: 'boolean',
      },
      direction: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      end_date: {
        type: 'string',
        format: 'date-time',
      },
      feedback: {
        type: 'string',
        enum: [0, 1],
      },
      filters: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            key: {
              type: 'string',
              enum: [
                'id',
                'created_at',
                'request_content_type',
                'response_content_type',
                'success',
                'cached',
                'provider',
                'model',
                'model_type',
                'cost',
                'tokens',
                'tokens_in',
                'tokens_out',
                'duration',
                'feedback',
                'event_id',
                'request_type',
                'metadata.key',
                'metadata.value',
                'prompts.prompt_id',
                'prompts.version_id',
              ],
            },
            operator: {
              type: 'string',
              enum: ['eq', 'neq', 'contains', 'lt', 'gt'],
            },
            value: {
              type: 'array',
              items: {
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
          },
          required: ['key', 'operator', 'value'],
        },
      },
      max_cost: {
        type: 'number',
      },
      max_duration: {
        type: 'number',
      },
      max_tokens_in: {
        type: 'number',
      },
      max_tokens_out: {
        type: 'number',
      },
      max_total_tokens: {
        type: 'number',
      },
      meta_info: {
        type: 'boolean',
      },
      min_cost: {
        type: 'number',
      },
      min_duration: {
        type: 'number',
      },
      min_tokens_in: {
        type: 'number',
      },
      min_tokens_out: {
        type: 'number',
      },
      min_total_tokens: {
        type: 'number',
      },
      model: {
        type: 'string',
      },
      model_type: {
        type: 'string',
      },
      order_by: {
        type: 'string',
        enum: ['created_at', 'provider', 'model', 'model_type', 'success', 'cached'],
      },
      order_by_direction: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
      page: {
        type: 'integer',
      },
      per_page: {
        type: 'integer',
      },
      provider: {
        type: 'string',
      },
      request_content_type: {
        type: 'string',
      },
      response_content_type: {
        type: 'string',
      },
      search: {
        type: 'string',
      },
      start_date: {
        type: 'string',
        format: 'date-time',
      },
      success: {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { gateway_id, ...body } = args;
  return client.aiGateway.logs.list(gateway_id, body);
};

export default { metadata, tool, handler };
