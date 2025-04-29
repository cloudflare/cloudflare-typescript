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
  name: 'edit_sites_magic_transit_wans',
  description: 'Patch a specific Site WAN.',
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
      wan_id: {
        type: 'string',
        description: 'Identifier',
      },
      name: {
        type: 'string',
      },
      physport: {
        type: 'integer',
      },
      priority: {
        type: 'integer',
      },
      static_addressing: {
        $ref: '#/$defs/wan_static_addressing',
      },
      vlan_tag: {
        type: 'integer',
        description: 'VLAN ID. Use zero for untagged.',
      },
    },
    $defs: {
      wan_static_addressing: {
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
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { wan_id, ...body } = args as any;
  return client.magicTransit.sites.wans.edit(wan_id, body);
};

export default { metadata, tool, handler };
