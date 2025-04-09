// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'filters',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'bulk_update_filters',
  description: 'Updates one or more existing filters.',
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
  return client.filters.bulkUpdate(body);
};

export default { metadata, tool, handler };
