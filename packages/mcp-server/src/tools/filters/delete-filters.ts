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
  name: 'delete_filters',
  description: 'Deletes an existing filter.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      filter_id: {
        type: 'string',
        description: 'The unique identifier of the filter.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { filter_id, ...body } = args;
  return client.filters.delete(filter_id, body);
};

export default { metadata, tool, handler };
