// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.tunnels.cloudflared.connections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections',
  operationId: 'cloudflare-tunnel-list-cloudflare-tunnel-connections',
};

export const tool: Tool = {
  name: 'get_cloudflared_tunnels_zero_trust_connections',
  description: 'Fetches connection details for a Cloudflare Tunnel.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { tunnel_id, ...body } = args as any;
  return client.zeroTrust.tunnels.cloudflared.connections.get(tunnel_id, body);
};

export default { metadata, tool, handler };
