// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rules.lists.items',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_lists_rules_items',
  description:
    'Removes one or more items from a list.\n\nThis operation is asynchronous. To get current the operation status, invoke the [Get bulk operation status](/operations/lists-get-bulk-operation-status) endpoint with the returned `operation_id`.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      list_id: {
        type: 'string',
        description: 'The unique ID of the list.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { list_id, ...body } = args;
  return client.rules.lists.items.delete(list_id, body);
};

export default { metadata, tool, handler };
