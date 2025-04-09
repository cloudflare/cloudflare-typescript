// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.tunnels.cloudflared.management',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_cloudflared_tunnels_zero_trust_management',
  description:
    'Gets a management token used to access the management resources (i.e. Streaming Logs) of a tunnel.',
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
      resources: {
        type: 'array',
        items: {
          type: 'string',
          description: 'Management resources the token will have access to.',
          enum: ['logs'],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { tunnel_id, ...body } = args;
  return client.zeroTrust.tunnels.cloudflared.management.create(tunnel_id, body);
};

export default { metadata, tool, handler };
