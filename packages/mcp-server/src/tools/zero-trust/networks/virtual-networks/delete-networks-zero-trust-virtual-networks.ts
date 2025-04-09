// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.virtual_networks',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_networks_zero_trust_virtual_networks',
  description: 'Deletes an existing virtual network.',
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
  return client.zeroTrust.networks.virtualNetworks.delete(virtual_network_id, body);
};

export default { metadata, tool, handler };
