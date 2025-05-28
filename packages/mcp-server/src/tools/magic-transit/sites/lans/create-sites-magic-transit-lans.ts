// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.sites.lans',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/magic/sites/{site_id}/lans',
  operationId: 'magic-site-lans-create-lan',
};

export const tool: Tool = {
  name: 'create_sites_magic_transit_lans',
  description:
    'Creates a new Site LAN. If the site is in high availability mode, static_addressing is required along with secondary and virtual address.',
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
      ha_link: {
        type: 'boolean',
        description:
          'mark true to use this LAN for HA probing. only works for site with HA turned on. only one LAN can be set as the ha_link.',
      },
      name: {
        type: 'string',
      },
      nat: {
        $ref: '#/$defs/nat',
      },
      routed_subnets: {
        type: 'array',
        items: {
          $ref: '#/$defs/routed_subnet',
        },
      },
      static_addressing: {
        $ref: '#/$defs/lan_static_addressing',
      },
      vlan_tag: {
        type: 'integer',
        description: 'VLAN ID. Use zero for untagged.',
      },
    },
    $defs: {
      nat: {
        type: 'object',
        properties: {
          static_prefix: {
            type: 'string',
            description: 'A valid CIDR notation representing an IP range.',
          },
        },
        required: [],
      },
      routed_subnet: {
        type: 'object',
        properties: {
          next_hop: {
            type: 'string',
            description: 'A valid IPv4 address.',
          },
          prefix: {
            type: 'string',
            description: 'A valid CIDR notation representing an IP range.',
          },
          nat: {
            $ref: '#/$defs/nat',
          },
        },
        required: ['next_hop', 'prefix'],
      },
      lan_static_addressing: {
        type: 'object',
        description:
          'If the site is not configured in high availability mode, this configuration is optional (if omitted, use DHCP). However, if in high availability mode, static_address is required along with secondary and virtual address.',
        properties: {
          address: {
            type: 'string',
            description: 'A valid CIDR notation representing an IP range.',
          },
          dhcp_relay: {
            $ref: '#/$defs/dhcp_relay',
          },
          dhcp_server: {
            $ref: '#/$defs/dhcp_server',
          },
          secondary_address: {
            type: 'string',
            description: 'A valid CIDR notation representing an IP range.',
          },
          virtual_address: {
            type: 'string',
            description: 'A valid CIDR notation representing an IP range.',
          },
        },
        required: ['address'],
      },
      dhcp_relay: {
        type: 'object',
        properties: {
          server_addresses: {
            type: 'array',
            description: 'List of DHCP server IPs.',
            items: {
              type: 'string',
              description: 'A valid IPv4 address.',
            },
          },
        },
        required: [],
      },
      dhcp_server: {
        type: 'object',
        properties: {
          dhcp_pool_end: {
            type: 'string',
            description: 'A valid IPv4 address.',
          },
          dhcp_pool_start: {
            type: 'string',
            description: 'A valid IPv4 address.',
          },
          dns_server: {
            type: 'string',
            description: 'A valid IPv4 address.',
          },
          dns_servers: {
            type: 'array',
            items: {
              type: 'string',
              description: 'A valid IPv4 address.',
            },
          },
          reservations: {
            type: 'object',
            description: 'Mapping of MAC addresses to IP addresses',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { site_id, ...body } = args as any;
  return client.magicTransit.sites.lans.create(site_id, body);
};

export default { metadata, tool, handler };
