// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'api_gateway.discovery.operations',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_discovery_api_gateway_operations',
  description: 'Retrieve the most up to date view of discovered operations',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      diff: {
        type: 'boolean',
        description:
          'When `true`, only return API Discovery results that are not saved into API Shield Endpoint Management',
      },
      direction: {
        type: 'string',
        description: 'Direction to order results.',
        enum: ['asc', 'desc'],
      },
      endpoint: {
        type: 'string',
        description: 'Filter results to only include endpoints containing this pattern.',
      },
      host: {
        type: 'array',
        description: 'Filter results to only include the specified hosts.',
        items: {
          type: 'string',
        },
      },
      method: {
        type: 'array',
        description: 'Filter results to only include the specified HTTP methods.',
        items: {
          type: 'string',
        },
      },
      order: {
        type: 'string',
        description: 'Field to order by',
        enum: ['host', 'method', 'endpoint', 'traffic_stats.requests', 'traffic_stats.last_updated'],
      },
      origin: {
        type: 'string',
        description:
          'Filter results to only include discovery results sourced from a particular discovery engine\n  * `ML` - Discovered operations that were sourced using ML API Discovery\n  * `SessionIdentifier` - Discovered operations that were sourced using Session Identifier API Discovery',
        enum: ['ML', 'SessionIdentifier', 'LabelDiscovery'],
      },
      page: {
        type: 'integer',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'integer',
        description: 'Maximum number of results per page.',
      },
      state: {
        type: 'string',
        description:
          'Filter results to only include discovery results in a particular state. States are as follows\n  * `review` - Discovered operations that are not saved into API Shield Endpoint Management\n  * `saved` - Discovered operations that are already saved into API Shield Endpoint Management\n  * `ignored` - Discovered operations that have been marked as ignored',
        enum: ['review', 'saved', 'ignored'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.apiGateway.discovery.operations.list(body);
};

export default { metadata, tool, handler };
