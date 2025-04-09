// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.routes',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_workers_routes',
  description: 'Returns information about a route, including URL pattern and Worker.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      route_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { route_id, ...body } = args;
  return client.workers.routes.get(route_id, body);
};

export default { metadata, tool, handler };
