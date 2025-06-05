// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway.datasets',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}',
  operationId: 'aig-config-update-dataset',
};

export const tool: Tool = {
  name: 'update_ai_gateway_datasets',
  description: 'Update a Dataset',
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
      id: {
        type: 'string',
      },
      enable: {
        type: 'boolean',
      },
      filters: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            key: {
              type: 'string',
              enum: [
                'created_at',
                'request_content_type',
                'response_content_type',
                'success',
                'cached',
                'provider',
                'model',
                'cost',
                'tokens',
                'tokens_in',
                'tokens_out',
                'duration',
                'feedback',
              ],
            },
            operator: {
              type: 'string',
              enum: ['eq', 'contains', 'lt', 'gt'],
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
      name: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.aiGateway.datasets.update(id, body));
};

export default { metadata, tool, handler };
