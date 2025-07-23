// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway.logs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs',
  operationId: 'aig-config-list-gateway-logs',
};

export const tool: Tool = {
  name: 'list_ai_gateway_logs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Gateway Logs\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          cached: {\n            type: 'boolean'\n          },\n          created_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          duration: {\n            type: 'integer'\n          },\n          model: {\n            type: 'string'\n          },\n          path: {\n            type: 'string'\n          },\n          provider: {\n            type: 'string'\n          },\n          success: {\n            type: 'boolean'\n          },\n          tokens_in: {\n            type: 'integer'\n          },\n          tokens_out: {\n            type: 'integer'\n          },\n          cost: {\n            type: 'number'\n          },\n          custom_cost: {\n            type: 'boolean'\n          },\n          metadata: {\n            type: 'string'\n          },\n          model_type: {\n            type: 'string'\n          },\n          request_content_type: {\n            type: 'string'\n          },\n          request_type: {\n            type: 'string'\n          },\n          response_content_type: {\n            type: 'string'\n          },\n          status_code: {\n            type: 'integer'\n          },\n          step: {\n            type: 'integer'\n          }\n        },\n        required: [          'id',\n          'cached',\n          'created_at',\n          'duration',\n          'model',\n          'path',\n          'provider',\n          'success',\n          'tokens_in',\n          'tokens_out'\n        ]\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number'\n        },\n        max_cost: {\n          type: 'number'\n        },\n        max_duration: {\n          type: 'number'\n        },\n        max_tokens_in: {\n          type: 'number'\n        },\n        max_tokens_out: {\n          type: 'number'\n        },\n        max_total_tokens: {\n          type: 'number'\n        },\n        min_cost: {\n          type: 'number'\n        },\n        min_duration: {\n          type: 'number'\n        },\n        min_tokens_in: {\n          type: 'number'\n        },\n        min_tokens_out: {\n          type: 'number'\n        },\n        min_total_tokens: {\n          type: 'number'\n        },\n        page: {\n          type: 'number'\n        },\n        per_page: {\n          type: 'number'\n        },\n        total_count: {\n          type: 'number'\n        }\n      }\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'result_info',\n    'success'\n  ]\n}\n```",
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { gateway_id, ...body } = args as any;
  const response = await client.aiGateway.logs.list(gateway_id, body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
