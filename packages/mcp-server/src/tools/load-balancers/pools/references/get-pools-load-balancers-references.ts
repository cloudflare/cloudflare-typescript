// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.pools.references',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/load_balancers/pools/{pool_id}/references',
  operationId: 'account-load-balancer-pools-list-pool-references',
};

export const tool: Tool = {
  name: 'get_pools_load_balancers_references',
  description: 'Get the list of resources that reference the provided pool.',
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
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { pool_id, ...body } = args as any;
  return client.loadBalancers.pools.references.get(pool_id, body);
};

export default { metadata, tool, handler };
