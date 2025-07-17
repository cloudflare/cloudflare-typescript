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
  httpPath: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}',
  operationId: 'aig-config-get-gateway-log-detail',
};

export const tool: Tool = {
  name: 'get_ai_gateway_logs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Gateway Log Detail\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        cached: {\n          type: 'boolean'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        duration: {\n          type: 'integer'\n        },\n        model: {\n          type: 'string'\n        },\n        path: {\n          type: 'string'\n        },\n        provider: {\n          type: 'string'\n        },\n        success: {\n          type: 'boolean'\n        },\n        tokens_in: {\n          type: 'integer'\n        },\n        tokens_out: {\n          type: 'integer'\n        },\n        cost: {\n          type: 'number'\n        },\n        custom_cost: {\n          type: 'boolean'\n        },\n        metadata: {\n          type: 'string'\n        },\n        model_type: {\n          type: 'string'\n        },\n        request_content_type: {\n          type: 'string'\n        },\n        request_head: {\n          type: 'string'\n        },\n        request_head_complete: {\n          type: 'boolean'\n        },\n        request_size: {\n          type: 'integer'\n        },\n        request_type: {\n          type: 'string'\n        },\n        response_content_type: {\n          type: 'string'\n        },\n        response_head: {\n          type: 'string'\n        },\n        response_head_complete: {\n          type: 'boolean'\n        },\n        response_size: {\n          type: 'integer'\n        },\n        status_code: {\n          type: 'integer'\n        },\n        step: {\n          type: 'integer'\n        }\n      },\n      required: [        'id',\n        'cached',\n        'created_at',\n        'duration',\n        'model',\n        'path',\n        'provider',\n        'success',\n        'tokens_in',\n        'tokens_out'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'gateway_id', 'id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.aiGateway.logs.get(id, body)));
};

export default { metadata, tool, handler };
