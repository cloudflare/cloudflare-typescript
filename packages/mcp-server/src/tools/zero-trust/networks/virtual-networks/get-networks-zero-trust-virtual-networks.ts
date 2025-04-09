// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.virtual_networks',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_networks_zero_trust_virtual_networks',
  description: 'Get a virtual network.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      virtual_network_id: {
        type: 'string',
        description: 'UUID of the virtual network.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { virtual_network_id, ...body } = args;
  return client.zeroTrust.networks.virtualNetworks.get(virtual_network_id, body);
};

export default { metadata, tool, handler };
