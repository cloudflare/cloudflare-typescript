// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.ipsec_tunnels',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'psk_generate_magic_transit_ipsec_tunnels',
  description:
    "Generates a Pre Shared Key for a specific IPsec tunnel used in the IKE session. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes. After a PSK is generated, the PSK is immediately persisted to Cloudflare's edge and cannot be retrieved later. Note the PSK in a safe place.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      ipsec_tunnel_id: {
        type: 'string',
        description: 'Identifier',
      },
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ipsec_tunnel_id, ...body } = args;
  return client.magicTransit.ipsecTunnels.pskGenerate(ipsec_tunnel_id, body);
};

export default { metadata, tool, handler };
