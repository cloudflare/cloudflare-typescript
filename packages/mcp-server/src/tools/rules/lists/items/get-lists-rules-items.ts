// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rules.lists.items',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/rules/lists/{list_id}/items/{item_id}',
  operationId: 'lists-get-a-list-item',
};

export const tool: Tool = {
  name: 'get_lists_rules_items',
  description: 'Fetches a list item in the list.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      list_id: {
        type: 'string',
        description: 'The unique ID of the list.',
      },
      item_id: {
        type: 'string',
        description: 'Defines the unique ID of the item in the List.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { item_id, ...body } = args as any;
  return asTextContentResult(await client.rules.lists.items.get(item_id, body));
};

export default { metadata, tool, handler };
