// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_load_balancers',
  description: 'Fetch a single configured load balancer.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
      },
      load_balancer_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { load_balancer_id, ...body } = args;
  return client.loadBalancers.get(load_balancer_id, body);
};

export default { metadata, tool, handler };
