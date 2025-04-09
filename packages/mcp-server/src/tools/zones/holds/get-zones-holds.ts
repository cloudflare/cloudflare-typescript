// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zones.holds',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_zones_holds',
  description: 'Retrieve whether the zone is subject to a zone hold, and metadata about the hold.',
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
  return client.zones.holds.get(body);
};

export default { metadata, tool, handler };
