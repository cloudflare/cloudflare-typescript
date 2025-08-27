// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/ai-gateway/gateways/{id}',
  operationId: 'aig-config-delete-gateway',
};

export const tool: Tool = {
  name: 'delete_ai_gateway',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete a Gateway\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'gateway id'\n        },\n        account_id: {\n          type: 'string'\n        },\n        account_tag: {\n          type: 'string'\n        },\n        cache_invalidate_on_update: {\n          type: 'boolean'\n        },\n        cache_ttl: {\n          type: 'integer'\n        },\n        collect_logs: {\n          type: 'boolean'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        internal_id: {\n          type: 'string'\n        },\n        modified_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        rate_limiting_interval: {\n          type: 'integer'\n        },\n        rate_limiting_limit: {\n          type: 'integer'\n        },\n        rate_limiting_technique: {\n          type: 'string',\n          enum: [            'fixed',\n            'sliding'\n          ]\n        },\n        authentication: {\n          type: 'boolean'\n        },\n        dlp: {\n          type: 'object',\n          properties: {\n            action: {\n              type: 'string',\n              enum: [                'BLOCK',\n                'FLAG'\n              ]\n            },\n            enabled: {\n              type: 'boolean'\n            },\n            profiles: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            }\n          },\n          required: [            'action',\n            'enabled',\n            'profiles'\n          ]\n        },\n        log_management: {\n          type: 'integer'\n        },\n        log_management_strategy: {\n          type: 'string',\n          enum: [            'STOP_INSERTING',\n            'DELETE_OLDEST'\n          ]\n        },\n        logpush: {\n          type: 'boolean'\n        },\n        logpush_public_key: {\n          type: 'string'\n        },\n        store_id: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'account_id',\n        'account_tag',\n        'cache_invalidate_on_update',\n        'cache_ttl',\n        'collect_logs',\n        'created_at',\n        'internal_id',\n        'modified_at',\n        'rate_limiting_interval',\n        'rate_limiting_limit',\n        'rate_limiting_technique'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      id: {
        type: 'string',
        description: 'gateway id',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.aiGateway.delete(id, body)));
};

export default { metadata, tool, handler };
