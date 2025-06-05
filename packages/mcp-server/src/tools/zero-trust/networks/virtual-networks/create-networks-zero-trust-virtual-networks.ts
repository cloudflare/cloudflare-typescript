// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.virtual_networks',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/teamnet/virtual_networks',
  operationId: 'tunnel-virtual-network-create-a-virtual-network',
};

export const tool: Tool = {
  name: 'create_networks_zero_trust_virtual_networks',
  description: 'Adds a new virtual network to an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      name: {
        type: 'string',
        description: 'A user-friendly name for the virtual network.',
      },
      comment: {
        type: 'string',
        description: 'Optional remark describing the virtual network.',
      },
      is_default: {
        type: 'boolean',
        description: 'If `true`, this virtual network is the default for the account.',
      },
      is_default_network: {
        type: 'boolean',
        description: 'If `true`, this virtual network is the default for the account.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.networks.virtualNetworks.create(body));
};

export default { metadata, tool, handler };
