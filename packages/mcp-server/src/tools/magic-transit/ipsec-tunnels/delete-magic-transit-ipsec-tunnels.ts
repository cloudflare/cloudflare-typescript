// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.ipsec_tunnels',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/magic/ipsec_tunnels/{ipsec_tunnel_id}',
  operationId: 'magic-ipsec-tunnels-delete-ipsec-tunnel',
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
    required: ['account_id', 'ipsec_tunnel_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { ipsec_tunnel_id, ...body } = args as any;
  return asTextContentResult(await client.magicTransit.ipsecTunnels.delete(ipsec_tunnel_id, body));
};

export default { metadata, tool, handler };
