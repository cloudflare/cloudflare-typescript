// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.tunnels.warp_connector',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/warp_connector/{tunnel_id}',
  operationId: 'cloudflare-tunnel-delete-a-warp-connector-tunnel',
};

export const tool: Tool = {
  name: 'delete_tunnels_zero_trust_warp_connector',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletes a Warp Connector Tunnel from an account.",
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
  return asTextContentResult(await client.zeroTrust.tunnels.warpConnector.delete(tunnel_id, body));
};

export default { metadata, tool, handler };
