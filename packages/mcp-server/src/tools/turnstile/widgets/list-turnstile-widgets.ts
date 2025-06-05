// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'turnstile.widgets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/challenges/widgets',
  operationId: 'accounts-turnstile-widgets-list',
};

export const tool: Tool = {
  name: 'list_turnstile_widgets',
  description: 'Lists all turnstile widgets of an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      direction: {
        type: 'string',
        description: 'Direction to order widgets.',
        enum: ['asc', 'desc'],
      },
      order: {
        type: 'string',
        description: 'Field to order widgets by.',
        enum: ['id', 'sitekey', 'name', 'created_on', 'modified_on'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of items per page.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.turnstile.widgets.list(body));
};

export default { metadata, tool, handler };
