// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway.datasets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}',
  operationId: 'aig-config-fetch-dataset',
};

export const tool: Tool = {
  name: 'get_ai_gateway_datasets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch a Dataset\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        account_id: {\n          type: 'string'\n        },\n        account_tag: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        enable: {\n          type: 'boolean'\n        },\n        filters: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              key: {\n                type: 'string',\n                enum: [                  'created_at',\n                  'request_content_type',\n                  'response_content_type',\n                  'success',\n                  'cached',\n                  'provider',\n                  'model',\n                  'cost',\n                  'tokens',\n                  'tokens_in',\n                  'tokens_out',\n                  'duration',\n                  'feedback'\n                ]\n              },\n              operator: {\n                type: 'string',\n                enum: [                  'eq',\n                  'contains',\n                  'lt',\n                  'gt'\n                ]\n              },\n              value: {\n                type: 'array',\n                items: {\n                  anyOf: [                    {\n                      type: 'string'\n                    },\n                    {\n                      type: 'number'\n                    },\n                    {\n                      type: 'boolean'\n                    }\n                  ]\n                }\n              }\n            },\n            required: [              'key',\n              'operator',\n              'value'\n            ]\n          }\n        },\n        gateway_id: {\n          type: 'string',\n          description: 'gateway id'\n        },\n        modified_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'account_id',\n        'account_tag',\n        'created_at',\n        'enable',\n        'filters',\n        'gateway_id',\n        'modified_at',\n        'name'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
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
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.aiGateway.datasets.get(id, body)));
};

export default { metadata, tool, handler };
