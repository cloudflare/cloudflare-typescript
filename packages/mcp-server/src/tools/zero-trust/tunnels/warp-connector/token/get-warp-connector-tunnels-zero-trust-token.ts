// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.tunnels.warp_connector.token',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/warp_connector/{tunnel_id}/token',
  operationId: 'cloudflare-tunnel-get-a-warp-connector-tunnel-token',
};

export const tool: Tool = {
  name: 'get_warp_connector_tunnels_zero_trust_token',
  description: 'Gets the token used to associate warp device with a specific Warp Connector tunnel.',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { tunnel_id, ...body } = args as any;
  return client.zeroTrust.tunnels.warpConnector.token.get(tunnel_id, body);
};

export default { metadata, tool, handler };
