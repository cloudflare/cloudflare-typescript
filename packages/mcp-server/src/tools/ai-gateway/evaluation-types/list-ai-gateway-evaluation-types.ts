// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway.evaluation_types',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/ai-gateway/evaluation-types',
  operationId: 'aig-config-list-evaluators',
};

export const tool: Tool = {
  name: 'list_ai_gateway_evaluation_types',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Evaluators\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          created_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          description: {\n            type: 'string'\n          },\n          enable: {\n            type: 'boolean'\n          },\n          mandatory: {\n            type: 'boolean'\n          },\n          modified_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          name: {\n            type: 'string'\n          },\n          type: {\n            type: 'string'\n          }\n        },\n        required: [          'id',\n          'created_at',\n          'description',\n          'enable',\n          'mandatory',\n          'modified_at',\n          'name',\n          'type'\n        ]\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number'\n        },\n        page: {\n          type: 'number'\n        },\n        per_page: {\n          type: 'number'\n        },\n        total_count: {\n          type: 'number'\n        }\n      },\n      required: [        'count',\n        'page',\n        'per_page',\n        'total_count'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'result_info',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      order_by: {
        type: 'string',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.aiGateway.evaluationTypes.list(body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
