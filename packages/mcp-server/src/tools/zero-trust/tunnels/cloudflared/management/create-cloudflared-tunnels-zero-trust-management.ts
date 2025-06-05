// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.tunnels.cloudflared.management',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/cfd_tunnel/{tunnel_id}/management',
  operationId: 'cloudflare-tunnel-get-a-cloudflare-tunnel-management-token',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { tunnel_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.tunnels.cloudflared.management.create(tunnel_id, body));
};

export default { metadata, tool, handler };
