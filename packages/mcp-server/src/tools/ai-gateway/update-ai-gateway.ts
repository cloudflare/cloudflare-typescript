// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/ai-gateway/gateways/{id}',
  operationId: 'aig-config-update-gateway',
};

export const tool: Tool = {
  name: 'update_ai_gateway',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a Gateway\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    result: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'gateway id'\n        },\n        account_id: {\n          type: 'string'\n        },\n        account_tag: {\n          type: 'string'\n        },\n        cache_invalidate_on_update: {\n          type: 'boolean'\n        },\n        cache_ttl: {\n          type: 'integer'\n        },\n        collect_logs: {\n          type: 'boolean'\n        },\n        created_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        internal_id: {\n          type: 'string'\n        },\n        modified_at: {\n          type: 'string',\n          format: 'date-time'\n        },\n        rate_limiting_interval: {\n          type: 'integer'\n        },\n        rate_limiting_limit: {\n          type: 'integer'\n        },\n        rate_limiting_technique: {\n          type: 'string',\n          enum: [            'fixed',\n            'sliding'\n          ]\n        },\n        authentication: {\n          type: 'boolean'\n        },\n        log_management: {\n          type: 'integer'\n        },\n        log_management_strategy: {\n          type: 'string',\n          enum: [            'STOP_INSERTING',\n            'DELETE_OLDEST'\n          ]\n        },\n        logpush: {\n          type: 'boolean'\n        },\n        logpush_public_key: {\n          type: 'string'\n        }\n      },\n      required: [        'id',\n        'account_id',\n        'account_tag',\n        'cache_invalidate_on_update',\n        'cache_ttl',\n        'collect_logs',\n        'created_at',\n        'internal_id',\n        'modified_at',\n        'rate_limiting_interval',\n        'rate_limiting_limit',\n        'rate_limiting_technique'\n      ]\n    },\n    success: {\n      type: 'boolean'\n    }\n  },\n  required: [    'result',\n    'success'\n  ]\n}\n```",
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
      cache_invalidate_on_update: {
        type: 'boolean',
      },
      cache_ttl: {
        type: 'integer',
      },
      collect_logs: {
        type: 'boolean',
      },
      rate_limiting_interval: {
        type: 'integer',
      },
      rate_limiting_limit: {
        type: 'integer',
      },
      rate_limiting_technique: {
        type: 'string',
        enum: ['fixed', 'sliding'],
      },
      authentication: {
        type: 'boolean',
      },
      log_management: {
        type: 'integer',
      },
      log_management_strategy: {
        type: 'string',
        enum: ['STOP_INSERTING', 'DELETE_OLDEST'],
      },
      logpush: {
        type: 'boolean',
      },
      logpush_public_key: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [
      'account_id',
      'id',
      'cache_invalidate_on_update',
      'cache_ttl',
      'collect_logs',
      'rate_limiting_interval',
      'rate_limiting_limit',
      'rate_limiting_technique',
    ],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.aiGateway.update(id, body)));
};

export default { metadata, tool, handler };
