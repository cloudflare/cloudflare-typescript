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
  name: 'edit_networks_zero_trust_virtual_networks',
  description: 'Updates an existing virtual network.',
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
      comment: {
        type: 'string',
        description: 'Optional remark describing the virtual network.',
      },
      is_default_network: {
        type: 'boolean',
        description: 'If `true`, this virtual network is the default for the account.',
      },
      name: {
        type: 'string',
        description: 'A user-friendly name for the virtual network.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { virtual_network_id, ...body } = args;
  return client.zeroTrust.networks.virtualNetworks.edit(virtual_network_id, body);
};

export default { metadata, tool, handler };
