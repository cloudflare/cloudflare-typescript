// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_routing.addresses',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_email_routing_addresses',
  description: 'Lists existing destination addresses.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      direction: {
        type: 'string',
        description: 'Sorts results in an ascending or descending order.',
        enum: ['asc', 'desc'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Maximum number of results per page.',
      },
      verified: {
        type: 'string',
        description: 'Filter by verified destination addresses.',
        enum: [true, false],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.emailRouting.addresses.list(body);
};

export default { metadata, tool, handler };
