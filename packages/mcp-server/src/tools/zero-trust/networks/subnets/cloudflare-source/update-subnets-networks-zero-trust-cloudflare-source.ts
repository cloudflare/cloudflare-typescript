// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.subnets.cloudflare_source',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_subnets_networks_zero_trust_cloudflare_source',
  description: 'Updates the Cloudflare Source subnet of the given address family',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      address_family: {
        type: 'string',
        description: 'IP address family, either `v4` (IPv4) or `v6` (IPv6)',
        enum: ['v4', 'v6'],
      },
      comment: {
        type: 'string',
        description: 'An optional description of the subnet.',
      },
      name: {
        type: 'string',
        description: 'A user-friendly name for the subnet.',
      },
      network: {
        type: 'string',
        description: 'The private IPv4 or IPv6 range defining the subnet, in CIDR notation.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { address_family, ...body } = args;
  return client.zeroTrust.networks.subnets.cloudflareSource.update(address_family, body);
};

export default { metadata, tool, handler };
