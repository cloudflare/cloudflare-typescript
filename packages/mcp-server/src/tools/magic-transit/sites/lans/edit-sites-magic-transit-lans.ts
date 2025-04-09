// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.sites.lans',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_sites_magic_transit_lans',
  description: 'Patch a specific Site LAN.',
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
      lan_id: {
        type: 'string',
        description: 'Identifier',
      },
      name: {
        type: 'string',
      },
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
      physport: {
        type: 'integer',
      },
      routed_subnets: {
        type: 'array',
        items: {
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
              $ref: '#/properties/nat',
            },
          },
          required: ['next_hop', 'prefix'],
        },
      },
      static_addressing: {
        type: 'object',
        description:
          'If the site is not configured in high availability mode, this configuration is optional (if omitted, use DHCP). However, if in high availability mode, static_address is required along with secondary and virtual address.',
        properties: {
          address: {
            type: 'string',
            description: 'A valid CIDR notation representing an IP range.',
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
      vlan_tag: {
        type: 'integer',
        description: 'VLAN ID. Use zero for untagged.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { lan_id, ...body } = args;
  return client.magicTransit.sites.lans.edit(lan_id, body);
};

export default { metadata, tool, handler };
