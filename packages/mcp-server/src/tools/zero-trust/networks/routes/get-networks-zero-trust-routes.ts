// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.routes',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_networks_zero_trust_routes',
  description: 'Get a private network route in an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      route_id: {
        type: 'string',
        description: 'UUID of the route.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { route_id, ...body } = args;
  return client.zeroTrust.networks.routes.get(route_id, body);
};

export default { metadata, tool, handler };
