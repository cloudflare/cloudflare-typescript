// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rules.lists',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/rules/lists/{list_id}',
  operationId: 'lists-get-a-list',
};

export const tool: Tool = {
  name: 'get_rules_lists',
  description: 'Fetches the details of a list.',
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
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { list_id, ...body } = args as any;
  return asTextContentResult(await client.rules.lists.get(list_id, body));
};

export default { metadata, tool, handler };
