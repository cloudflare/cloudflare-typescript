// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.gre_tunnels',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/magic/gre_tunnels/{gre_tunnel_id}',
  operationId: 'magic-gre-tunnels-delete-gre-tunnel',
};

export const tool: Tool = {
  name: 'delete_magic_transit_gre_tunnels',
  description:
    'Disables and removes a specific static GRE tunnel. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { gre_tunnel_id, ...body } = args as any;
  return client.magicTransit.greTunnels.delete(gre_tunnel_id, body);
};

export default { metadata, tool, handler };
