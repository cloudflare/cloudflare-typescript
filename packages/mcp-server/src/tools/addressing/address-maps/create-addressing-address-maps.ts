// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.address_maps',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_addressing_address_maps',
  description: 'Create a new address map under the account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier of a Cloudflare account.',
      },
      description: {
        type: 'string',
        description:
          'An optional description field which may be used to describe the types of IPs or zones on the map.',
      },
      enabled: {
        type: 'boolean',
        description:
          "Whether the Address Map is enabled or not. Cloudflare's DNS will not respond with IP addresses on an Address Map until the map is enabled.",
      },
      ips: {
        type: 'array',
        items: {
          type: 'string',
          description: 'An IPv4 or IPv6 address.',
        },
      },
      memberships: {
        type: 'array',
        description:
          'Zones and Accounts which will be assigned IPs on this Address Map. A zone membership will take priority over an account membership.',
        items: {
          type: 'object',
          properties: {
            can_delete: {
              type: 'boolean',
              description: 'Controls whether the membership can be deleted via the API or not.',
            },
            created_at: {
              type: 'string',
              format: 'date-time',
            },
            identifier: {
              type: 'string',
              description: 'The identifier for the membership (eg. a zone or account tag).',
            },
            kind: {
              type: 'string',
              description: 'The type of the membership.',
              enum: ['zone', 'account'],
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.addressing.addressMaps.create(body);
};

export default { metadata, tool, handler };
