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
  name: 'delete_magic_transit_routes',
  description: 'Disable and remove a specific Magic static route.',
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
  return client.magicTransit.routes.delete(route_id, body);
};

export default { metadata, tool, handler };
