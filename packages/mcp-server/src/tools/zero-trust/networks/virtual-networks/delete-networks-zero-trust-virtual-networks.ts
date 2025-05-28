// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.virtual_networks',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}',
  operationId: 'tunnel-virtual-network-delete',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { virtual_network_id, ...body } = args as any;
  return client.zeroTrust.networks.virtualNetworks.delete(virtual_network_id, body);
};

export default { metadata, tool, handler };
