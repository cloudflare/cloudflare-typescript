// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cache.regional_tiered_cache',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_cache_regional_tiered_cache',
  description:
    'Instructs Cloudflare to check a regional hub data center on the way to your upper tier. This can help improve performance for smart and custom tiered cache topologies.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      value: {
        type: 'string',
        description: 'Value of the Regional Tiered Cache zone setting.',
        enum: ['on', 'off'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.cache.regionalTieredCache.edit(body);
};

export default { metadata, tool, handler };
