// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.gre_tunnels',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/magic/gre_tunnels/{gre_tunnel_id}',
  operationId: 'magic-gre-tunnels-list-gre-tunnel-details',
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
    required: ['account_id', 'gre_tunnel_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { gre_tunnel_id, ...body } = args as any;
  return asTextContentResult(await client.magicTransit.greTunnels.get(gre_tunnel_id, body));
};

export default { metadata, tool, handler };
