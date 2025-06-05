// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.routes',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/zones/{zone_id}/workers/routes/{route_id}',
  operationId: 'worker-routes-update-route',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { route_id, ...body } = args as any;
  return asTextContentResult(await client.workers.routes.update(route_id, body));
};

export default { metadata, tool, handler };
