// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.routes',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_magic_transit_routes',
  description: 'Get a specific Magic static route.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { route_id, ...body } = args;
  return client.magicTransit.routes.get(route_id, body);
};

export default { metadata, tool, handler };
