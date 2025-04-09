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
  name: 'delete_routes_networks_zero_trust_networks',
  description:
    'Deletes a private network route from an account. The CIDR in `ip_network_encoded` must be written in URL-encoded format. If no virtual_network_id is provided it will delete the route from the default vnet. If no tun_type is provided it will fetch the type from the tunnel_id or if that is missing it will assume Cloudflare Tunnel as default. If tunnel_id is provided it will delete the route from that tunnel, otherwise it will delete the route based on the vnet and tun_type.\n',
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
      tun_type: {
        type: 'string',
        description: 'The type of tunnel.',
        enum: ['cfd_tunnel', 'warp_connector', 'warp', 'magic', 'ip_sec', 'gre', 'cni'],
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
  const { ip_network_encoded, ...body } = args;
  return client.zeroTrust.networks.routes.networks.delete(ip_network_encoded, body);
};

export default { metadata, tool, handler };
