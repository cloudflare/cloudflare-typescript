// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rules.lists.items',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_lists_rules_items',
  description: 'Fetches a list item in the list.',
  inputSchema: {
    type: 'object',
    properties: {
      account_identifier: {
        type: 'string',
        description: 'Identifier',
      },
      list_id: {
        type: 'string',
        description: 'The unique ID of the list.',
      },
      item_id: {
        type: 'string',
        description: 'The unique ID of the item in the List.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { item_id, ...body } = args;
  return client.rules.lists.items.get(item_id, body);
};

export default { metadata, tool, handler };
