// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.tunnels.cloudflared.connectors',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_cloudflared_tunnels_zero_trust_connectors',
  description: 'Fetches connector and connection details for a Cloudflare Tunnel.',
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
      connector_id: {
        type: 'string',
        description: 'UUID of the Cloudflare Tunnel connector.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { connector_id, ...body } = args;
  return client.zeroTrust.tunnels.cloudflared.connectors.get(connector_id, body);
};

export default { metadata, tool, handler };
