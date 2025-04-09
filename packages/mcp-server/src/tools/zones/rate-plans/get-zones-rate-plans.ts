// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones.rate_plans',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_zones_rate_plans',
  description: 'Lists all rate plans the zone can subscribe to.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zones.ratePlans.get(body);
};

export default { metadata, tool, handler };
