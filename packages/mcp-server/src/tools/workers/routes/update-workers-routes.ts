// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.routes',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_workers_routes',
  description: 'Updates the URL pattern or Worker associated with a route.',
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
      pattern: {
        type: 'string',
        title: 'Route pattern',
      },
      script: {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { route_id, ...body } = args;
  return client.workers.routes.update(route_id, body);
};

export default { metadata, tool, handler };
