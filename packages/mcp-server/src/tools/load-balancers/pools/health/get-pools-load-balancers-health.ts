// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.pools.health',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/load_balancers/pools/{pool_id}/health',
  operationId: 'account-load-balancer-pools-pool-health-details',
};

export const tool: Tool = {
  name: 'get_pools_load_balancers_health',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch the latest pool health status for a single pool.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      description: 'A list of regions from which to run health checks. Null means every Cloudflare data center.',\n      properties: {\n        pool_id: {\n          type: 'string',\n          description: 'Pool ID'\n        },\n        pop_health: {\n          type: 'object',\n          description: 'List of regions and associated health status.',\n          properties: {\n            healthy: {\n              type: 'boolean',\n              description: 'Whether health check in region is healthy.'\n            },\n            origins: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  ip: {\n                    type: 'object',\n                    properties: {\n                      failure_reason: {\n                        type: 'string',\n                        description: 'Failure reason.'\n                      },\n                      healthy: {\n                        type: 'boolean',\n                        description: 'Origin health status.'\n                      },\n                      response_code: {\n                        type: 'number',\n                        description: 'Response code from origin health check.'\n                      },\n                      rtt: {\n                        type: 'string',\n                        description: 'Origin RTT (Round Trip Time) response.'\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      pool_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'pool_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { pool_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.loadBalancers.pools.health.get(pool_id, body)),
  );
};

export default { metadata, tool, handler };
