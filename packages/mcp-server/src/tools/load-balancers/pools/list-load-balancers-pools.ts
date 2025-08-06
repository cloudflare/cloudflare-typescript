// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.pools',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/load_balancers/pools',
  operationId: 'account-load-balancer-pools-list-pools',
};

export const tool: Tool = {
  name: 'list_load_balancers_pools',
  description: 'List configured pools.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      monitor: {
        type: 'string',
        description: 'The ID of the Monitor to use for checking the health of origins within this pool.',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.loadBalancers.pools.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
