// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway.logs',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_ai_gateway_logs',
  description: 'Delete Gateway Logs',
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
      limit: {
        type: 'integer',
      },
      order_by: {
        type: 'string',
        enum: [
          'created_at',
          'provider',
          'model',
          'model_type',
          'success',
          'cached',
          'cost',
          'tokens_in',
          'tokens_out',
          'duration',
          'feedback',
        ],
      },
      order_by_direction: {
        type: 'string',
        enum: ['asc', 'desc'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { gateway_id, ...body } = args;
  return client.aiGateway.logs.delete(gateway_id, body);
};

export default { metadata, tool, handler };
