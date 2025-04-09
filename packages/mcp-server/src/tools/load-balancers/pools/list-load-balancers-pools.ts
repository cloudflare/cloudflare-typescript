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
  name: 'list_load_balancers_pools',
  description: 'List configured pools.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      monitor: {
        type: 'string',
        description: 'The ID of the Monitor to use for checking the health of origins within this pool.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.loadBalancers.pools.list(body);
};

export default { metadata, tool, handler };
