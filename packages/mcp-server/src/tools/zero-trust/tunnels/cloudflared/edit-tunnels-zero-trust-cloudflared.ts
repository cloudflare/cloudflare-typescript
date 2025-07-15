// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.tunnels.cloudflared',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}',
  operationId: 'cloudflare-tunnel-update-a-cloudflare-tunnel',
};

export const tool: Tool = {
  name: 'edit_tunnels_zero_trust_cloudflared',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates an existing Cloudflare Tunnel.",
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
      name: {
        type: 'string',
        description: 'A user-friendly name for a tunnel.',
      },
      tunnel_secret: {
        type: 'string',
        description:
          'Sets the password required to run a locally-managed tunnel. Must be at least 32 bytes and encoded as a base64 string.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { tunnel_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.tunnels.cloudflared.edit(tunnel_id, body));
};

export default { metadata, tool, handler };
