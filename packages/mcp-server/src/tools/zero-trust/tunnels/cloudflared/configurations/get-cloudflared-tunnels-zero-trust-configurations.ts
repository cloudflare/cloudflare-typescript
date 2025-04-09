// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.tunnels.cloudflared.configurations',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_cloudflared_tunnels_zero_trust_configurations',
  description: 'Gets the configuration for a remotely-managed tunnel',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      tunnel_id: {
        type: 'string',
        description: 'UUID of the tunnel.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { tunnel_id, ...body } = args;
  return client.zeroTrust.tunnels.cloudflared.configurations.get(tunnel_id, body);
};

export default { metadata, tool, handler };
