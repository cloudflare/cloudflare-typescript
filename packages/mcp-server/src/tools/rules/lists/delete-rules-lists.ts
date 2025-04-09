// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rules.lists',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_rules_lists',
  description: 'Deletes a specific list and all its items.',
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
  return client.rules.lists.delete(list_id, body);
};

export default { metadata, tool, handler };
