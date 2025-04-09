// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.routes',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'bulk_update_magic_transit_routes',
  description:
    'Update multiple Magic static routes. Use `?validate_only=true` as an optional query parameter to run validation only without persisting changes. Only fields for a route that need to be changed need be provided.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      routes: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Identifier',
            },
            nexthop: {
              type: 'string',
              description: 'The next-hop IP Address for the static route.',
            },
            prefix: {
              type: 'string',
              description: 'IP Prefix in Classless Inter-Domain Routing format.',
            },
            priority: {
              type: 'integer',
              description: 'Priority of the static route.',
            },
            description: {
              type: 'string',
              description: 'An optional human provided description of the static route.',
            },
            scope: {
              type: 'object',
              description: 'Used only for ECMP routes.',
              properties: {
                colo_names: {
                  type: 'array',
                  description: 'List of colo names for the ECMP scope.',
                  items: {
                    type: 'string',
                    description: 'Scope colo name.',
                  },
                },
                colo_regions: {
                  type: 'array',
                  description: 'List of colo regions for the ECMP scope.',
                  items: {
                    type: 'string',
                    description: 'Scope colo region.',
                  },
                },
              },
              required: [],
            },
            weight: {
              type: 'integer',
              description: 'Optional weight of the ECMP scope - if provided.',
            },
          },
          required: ['id', 'nexthop', 'prefix', 'priority'],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.magicTransit.routes.bulkUpdate(body);
};

export default { metadata, tool, handler };
