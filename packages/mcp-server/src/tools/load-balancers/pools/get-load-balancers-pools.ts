// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.pools',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/load_balancers/pools/{pool_id}',
  operationId: 'account-load-balancer-pools-pool-details',
};

export const tool: Tool = {
  name: 'get_load_balancers_pools',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch a single configured pool.",
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
    },
    required: ['account_id', 'pool_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { pool_id, ...body } = args as any;
  return asTextContentResult(await client.loadBalancers.pools.get(pool_id, body));
};

export default { metadata, tool, handler };
