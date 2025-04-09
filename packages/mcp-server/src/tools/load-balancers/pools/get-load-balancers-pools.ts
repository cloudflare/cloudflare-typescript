// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.pools',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_load_balancers_pools',
  description: 'Fetch a single configured pool.',
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
  return client.loadBalancers.pools.get(pool_id, body);
};

export default { metadata, tool, handler };
