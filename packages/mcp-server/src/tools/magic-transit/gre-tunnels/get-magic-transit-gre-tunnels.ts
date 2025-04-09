// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.gre_tunnels',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_magic_transit_gre_tunnels',
  description: 'Lists informtion for a specific GRE tunnel.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      gre_tunnel_id: {
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
  const { gre_tunnel_id, ...body } = args;
  return client.magicTransit.greTunnels.get(gre_tunnel_id, body);
};

export default { metadata, tool, handler };
