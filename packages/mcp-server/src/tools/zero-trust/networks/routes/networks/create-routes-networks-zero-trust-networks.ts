// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.routes.networks',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_routes_networks_zero_trust_networks',
  description:
    'Routes a private network through a Cloudflare Tunnel. The CIDR in `ip_network_encoded` must be written in URL-encoded format.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      ip_network_encoded: {
        type: 'string',
        description: 'IP/CIDR range in URL-encoded format',
      },
      tunnel_id: {
        type: 'string',
        description: 'UUID of the tunnel.',
      },
      comment: {
        type: 'string',
        description: 'Optional remark describing the route.',
      },
      virtual_network_id: {
        type: 'string',
        description: 'UUID of the virtual network.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ip_network_encoded, ...body } = args;
  return client.zeroTrust.networks.routes.networks.create(ip_network_encoded, body);
};

export default { metadata, tool, handler };
