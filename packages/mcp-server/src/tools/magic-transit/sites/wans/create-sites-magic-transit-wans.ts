// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.sites.wans',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_sites_magic_transit_wans',
  description: 'Creates a new Site WAN.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      site_id: {
        type: 'string',
        description: 'Identifier',
      },
      physport: {
        type: 'integer',
      },
      name: {
        type: 'string',
      },
      priority: {
        type: 'integer',
      },
      static_addressing: {
        type: 'object',
        description:
          '(optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode.',
        properties: {
          address: {
            type: 'string',
            description: 'A valid CIDR notation representing an IP range.',
          },
          gateway_address: {
            type: 'string',
            description: 'A valid IPv4 address.',
          },
          secondary_address: {
            type: 'string',
            description: 'A valid CIDR notation representing an IP range.',
          },
        },
        required: ['address', 'gateway_address'],
      },
      vlan_tag: {
        type: 'integer',
        description: 'VLAN ID. Use zero for untagged.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { site_id, ...body } = args;
  return client.magicTransit.sites.wans.create(site_id, body);
};

export default { metadata, tool, handler };
