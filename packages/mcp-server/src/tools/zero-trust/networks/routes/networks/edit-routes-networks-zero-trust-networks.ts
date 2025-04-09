// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.routes.networks',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_routes_networks_zero_trust_networks',
  description:
    'Updates an existing private network route in an account. The CIDR in `ip_network_encoded` must be written in URL-encoded format.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      ip_network_encoded: {
        type: 'string',
        description: 'IP/CIDR range in URL-encoded format',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ip_network_encoded, ...body } = args;
  return client.zeroTrust.networks.routes.networks.edit(ip_network_encoded, body);
};

export default { metadata, tool, handler };
