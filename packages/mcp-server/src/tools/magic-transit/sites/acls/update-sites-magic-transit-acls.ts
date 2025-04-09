// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.sites.acls',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_sites_magic_transit_acls',
  description: 'Update a specific Site ACL.',
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
      acl_id: {
        type: 'string',
        description: 'Identifier',
      },
      description: {
        type: 'string',
        description: 'Description for the ACL.',
      },
      forward_locally: {
        type: 'boolean',
        description:
          'The desired forwarding action for this ACL policy. If set to "false", the policy will forward traffic to Cloudflare. If set to "true", the policy will forward traffic locally on the Magic Connector. If not included in request, will default to false.',
      },
      lan_1: {
        type: 'object',
        properties: {
          lan_id: {
            type: 'string',
            description: 'The identifier for the LAN you want to create an ACL policy with.',
          },
          lan_name: {
            type: 'string',
            description: 'The name of the LAN based on the provided lan_id.',
          },
          port_ranges: {
            type: 'array',
            description:
              'Array of port ranges on the provided LAN that will be included in the ACL. If no ports or port rangess are provided, communication on any port on this LAN is allowed.',
            items: {
              type: 'string',
              description: 'A valid port range value.',
            },
          },
          ports: {
            type: 'array',
            description:
              'Array of ports on the provided LAN that will be included in the ACL. If no ports or port ranges are provided, communication on any port on this LAN is allowed.',
            items: {
              type: 'integer',
            },
          },
          subnets: {
            type: 'array',
            description:
              'Array of subnet IPs within the LAN that will be included in the ACL. If no subnets are provided, communication on any subnets on this LAN are allowed.',
            items: {
              type: 'string',
              description: 'A valid IPv4 address.',
            },
          },
        },
        required: ['lan_id'],
      },
      lan_2: {
        $ref: '#/properties/lan_1',
      },
      name: {
        type: 'string',
        description: 'The name of the ACL.',
      },
      protocols: {
        type: 'array',
        items: {
          type: 'string',
          description:
            'Array of allowed communication protocols between configured LANs. If no protocols are provided, all protocols are allowed.',
          enum: ['tcp', 'udp', 'icmp'],
        },
      },
      unidirectional: {
        type: 'boolean',
        description:
          'The desired traffic direction for this ACL policy. If set to "false", the policy will allow bidirectional traffic. If set to "true", the policy will only allow traffic in one direction. If not included in request, will default to false.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { acl_id, ...body } = args;
  return client.magicTransit.sites.acls.update(acl_id, body);
};

export default { metadata, tool, handler };
