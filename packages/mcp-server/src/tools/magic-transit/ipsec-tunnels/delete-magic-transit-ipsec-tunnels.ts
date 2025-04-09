// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.ipsec_tunnels',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_magic_transit_ipsec_tunnels',
  description:
    'Disables and removes a specific static IPsec Tunnel associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      ipsec_tunnel_id: {
        type: 'string',
        description: 'Identifier',
      },
      'x-magic-new-hc-target': {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ipsec_tunnel_id, ...body } = args;
  return client.magicTransit.ipsecTunnels.delete(ipsec_tunnel_id, body);
};

export default { metadata, tool, handler };
