// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.sites.wans',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/magic/sites/{site_id}/wans',
  operationId: 'magic-site-wans-create-wan',
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
  const { site_id, ...body } = args as any;
  return client.magicTransit.sites.wans.create(site_id, body);
};

export default { metadata, tool, handler };
