// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rum.site_info',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_rum_site_info',
  description: 'Lists all Web Analytics sites of an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      order_by: {
        type: 'string',
        description: 'The property used to sort the list of results.',
        enum: ['host', 'created'],
      },
      page: {
        type: 'number',
        description: 'Current page within the paginated list of results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of items to return per page of results.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.rum.siteInfo.list(body);
};

export default { metadata, tool, handler };
