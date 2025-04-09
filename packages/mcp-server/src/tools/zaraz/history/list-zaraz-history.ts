// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zaraz.history',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_zaraz_history',
  description: 'Lists a history of published Zaraz configuration records for a zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      limit: {
        type: 'integer',
        description: 'Maximum amount of results to list. Default value is 10.',
      },
      offset: {
        type: 'integer',
        description: 'Ordinal number to start listing the results with. Default value is 0.',
      },
      sortField: {
        type: 'string',
        description: 'The field to sort by. Default is updated_at.',
        enum: ['id', 'user_id', 'description', 'created_at', 'updated_at'],
      },
      sortOrder: {
        type: 'string',
        description: 'Sorting order. Default is DESC.',
        enum: ['DESC', 'ASC'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zaraz.history.list(body);
};

export default { metadata, tool, handler };
