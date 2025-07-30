// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway.logs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs',
  operationId: 'aig-config-delete-gateway-logs',
};

export const tool: Tool = {
  name: 'delete_ai_gateway_logs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete Gateway Logs\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'success'\n  ]\n}\n```",
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
                'request_type',
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
                'metadata.key',
                'metadata.value',
                'prompts.prompt_id',
                'prompts.version_id',
                'authentication',
                'wholesale',
                'compatibilityMode',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'gateway_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { gateway_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.aiGateway.logs.delete(gateway_id, body)));
};

export default { metadata, tool, handler };
