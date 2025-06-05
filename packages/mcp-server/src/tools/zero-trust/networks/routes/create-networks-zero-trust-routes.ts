// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.routes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/teamnet/routes',
  operationId: 'tunnel-route-create-a-tunnel-route',
};

export const tool: Tool = {
  name: 'create_networks_zero_trust_routes',
  description: 'Routes a private network through a Cloudflare Tunnel.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      network: {
        type: 'string',
        description: 'The private IPv4 or IPv6 range connected by the route, in CIDR notation.',
      },
      tunnel_id: {
        type: 'string',
        description: 'UUID of the tunnel.',
      },
      comment: {
        type: 'string',
        description: 'Optional remark describing the route.',
      },
      virtual_network_id: {
        type: 'string',
        description: 'UUID of the virtual network.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.networks.routes.create(body));
};

export default { metadata, tool, handler };
