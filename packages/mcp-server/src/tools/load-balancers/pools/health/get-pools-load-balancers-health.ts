// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.pools.health',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_pools_load_balancers_health',
  description: 'Fetch the latest pool health status for a single pool.',
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

export const handler = (client: Cloudflare, args: any) => {
  const { pool_id, ...body } = args;
  return client.loadBalancers.pools.health.get(pool_id, body);
};

export default { metadata, tool, handler };
