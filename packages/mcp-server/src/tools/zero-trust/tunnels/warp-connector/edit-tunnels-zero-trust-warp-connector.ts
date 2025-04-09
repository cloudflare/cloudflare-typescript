// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.tunnels.warp_connector',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_tunnels_zero_trust_warp_connector',
  description: 'Updates an existing Warp Connector Tunnel.',
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

export const handler = (client: Cloudflare, args: any) => {
  const { tunnel_id, ...body } = args;
  return client.zeroTrust.tunnels.warpConnector.edit(tunnel_id, body);
};

export default { metadata, tool, handler };
