// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_rules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/pagerules',
  operationId: 'page-rules-list-page-rules',
};

export const tool: Tool = {
  name: 'list_page_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetches Page Rules in a zone.",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      direction: {
        type: 'string',
        description: 'The direction used to sort returned Page Rules.',
        enum: ['asc', 'desc'],
      },
      match: {
        type: 'string',
        description:
          'When set to `all`, all the search requirements must match. When set to `any`, only one of the search requirements has to match.',
        enum: ['any', 'all'],
      },
      order: {
        type: 'string',
        description: 'The field used to sort returned Page Rules.',
        enum: ['status', 'priority'],
      },
      status: {
        type: 'string',
        description: 'The status of the Page Rule.',
        enum: ['active', 'disabled'],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.pageRules.list(body));
};

export default { metadata, tool, handler };
