// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.routes',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_networks_zero_trust_routes',
  description:
    'Updates an existing private network route in an account. The fields that are meant to be updated should be provided in the body of the request.',
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
      comment: {
        type: 'string',
        description: 'Optional remark describing the route.',
      },
      network: {
        type: 'string',
        description: 'The private IPv4 or IPv6 range connected by the route, in CIDR notation.',
      },
      tunnel_id: {
        type: 'string',
        description: 'UUID of the tunnel.',
      },
      virtual_network_id: {
        type: 'string',
        description: 'UUID of the virtual network.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { route_id, ...body } = args;
  return client.zeroTrust.networks.routes.edit(route_id, body);
};

export default { metadata, tool, handler };
