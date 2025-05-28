// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.tunnels.cloudflared',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}',
  operationId: 'cloudflare-tunnel-get-a-cloudflare-tunnel',
};

export const tool: Tool = {
  name: 'get_tunnels_zero_trust_cloudflared',
  description: 'Fetches a single Cloudflare Tunnel.',
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
  return client.zeroTrust.tunnels.cloudflared.get(tunnel_id, body);
};

export default { metadata, tool, handler };
