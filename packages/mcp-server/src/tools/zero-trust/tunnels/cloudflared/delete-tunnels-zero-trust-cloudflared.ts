// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.tunnels.cloudflared',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}',
  operationId: 'cloudflare-tunnel-delete-a-cloudflare-tunnel',
};

export const tool: Tool = {
  name: 'delete_tunnels_zero_trust_cloudflared',
  description: 'Deletes a Cloudflare Tunnel from an account.',
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
    required: ['account_id', 'tunnel_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { tunnel_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.tunnels.cloudflared.delete(tunnel_id, body));
};

export default { metadata, tool, handler };
