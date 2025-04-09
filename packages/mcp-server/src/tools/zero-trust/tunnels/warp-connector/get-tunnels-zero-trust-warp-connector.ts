// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.tunnels.warp_connector',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_tunnels_zero_trust_warp_connector',
  description: 'Fetches a single Warp Connector Tunnel.',
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

export const handler = (client: Cloudflare, args: any) => {
  const { tunnel_id, ...body } = args;
  return client.zeroTrust.tunnels.warpConnector.get(tunnel_id, body);
};

export default { metadata, tool, handler };
