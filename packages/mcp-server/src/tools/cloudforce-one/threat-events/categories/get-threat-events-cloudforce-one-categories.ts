// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/cloudforce-one/events/categories/{category_id}',
  operationId: 'get_CategoryRead',
};

export const tool: Tool = {
  name: 'get_threat_events_cloudforce_one_categories',
  description: 'Reads a category',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      category_id: {
        type: 'string',
        description: 'Category UUID.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { category_id, ...body } = args as any;
  return asTextContentResult(await client.cloudforceOne.threatEvents.categories.get(category_id, body));
};

export default { metadata, tool, handler };
