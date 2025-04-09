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
  name: 'update_magic_transit_routes',
  description:
    'Update a specific Magic static route. Use `?validate_only=true` as an optional query parameter to run validation only without persisting changes.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      route_id: {
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
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { route_id, ...body } = args;
  return client.magicTransit.routes.update(route_id, body);
};

export default { metadata, tool, handler };
