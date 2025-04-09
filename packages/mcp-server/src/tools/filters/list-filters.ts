// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'filters',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_filters',
  description: 'Fetches filters in a zone. You can filter the results using several optional parameters.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      id: {
        type: 'string',
        description: 'The unique identifier of the filter.',
      },
      description: {
        type: 'string',
        description: 'A case-insensitive string to find in the description.',
      },
      expression: {
        type: 'string',
        description: 'A case-insensitive string to find in the expression.',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      paused: {
        type: 'boolean',
        description: 'When true, indicates that the filter is currently paused.',
      },
      per_page: {
        type: 'number',
        description: 'Number of filters per page.',
      },
      ref: {
        type: 'string',
        description: 'The filter ref (a short reference tag) to search for. Must be an exact match.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.filters.list(body);
};

export default { metadata, tool, handler };
