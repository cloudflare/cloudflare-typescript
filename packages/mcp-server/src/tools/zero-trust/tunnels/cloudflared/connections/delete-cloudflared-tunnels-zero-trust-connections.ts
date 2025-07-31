// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.tunnels.cloudflared.connections',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections',
  operationId: 'cloudflare-tunnel-clean-up-cloudflare-tunnel-connections',
};

export const tool: Tool = {
  name: 'delete_cloudflared_tunnels_zero_trust_connections',
  description:
    'Removes a connection (aka Cloudflare Tunnel Connector) from a Cloudflare Tunnel independently of its current state. If no connector id (client_id) is provided all connectors will be removed. We recommend running this command after rotating tokens.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      tunnel_id: {
        type: 'string',
        description: 'UUID of the tunnel.',
      },
      client_id: {
        type: 'string',
        description: 'UUID of the Cloudflare Tunnel connector.',
      },
    },
    required: ['account_id', 'tunnel_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { tunnel_id, ...body } = args as any;
  return asTextContentResult(
    (await client.zeroTrust.tunnels.cloudflared.connections.delete(tunnel_id, body)) as object,
  );
};

export default { metadata, tool, handler };
