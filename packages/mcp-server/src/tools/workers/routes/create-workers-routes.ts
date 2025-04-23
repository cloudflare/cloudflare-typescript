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
  name: 'create_workers_routes',
  description: 'Creates a route that maps a URL pattern to a Worker.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      pattern: {
        type: 'string',
        description:
          'Pattern to match incoming requests against. [Learn more](https://developers.cloudflare.com/workers/configuration/routing/routes/#matching-behavior).',
      },
      script: {
        type: 'string',
        description: 'Name of the script to run if the route matches.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.workers.routes.create(body);
};

export default { metadata, tool, handler };
