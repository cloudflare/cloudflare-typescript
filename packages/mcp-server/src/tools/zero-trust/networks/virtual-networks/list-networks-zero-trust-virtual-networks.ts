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
  name: 'list_networks_zero_trust_virtual_networks',
  description: 'Lists and filters virtual networks in an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      id: {
        type: 'string',
        description: 'UUID of the virtual network.',
      },
      is_default: {
        type: 'boolean',
        description:
          'If `true`, only include the default virtual network. If `false`, exclude the default virtual network. If empty, all virtual networks will be included.',
      },
      is_deleted: {
        type: 'boolean',
        description:
          'If `true`, only include deleted virtual networks. If `false`, exclude deleted virtual networks. If empty, all virtual networks will be included.',
      },
      name: {
        type: 'string',
        description: 'A user-friendly name for the virtual network.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.networks.virtualNetworks.list(body);
};

export default { metadata, tool, handler };
