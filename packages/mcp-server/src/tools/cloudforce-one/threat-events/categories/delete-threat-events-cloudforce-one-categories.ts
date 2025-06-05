// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.categories',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/cloudforce-one/events/categories/{category_id}',
  operationId: 'delete_CategoryDelete',
};

export const tool: Tool = {
  name: 'delete_threat_events_cloudforce_one_categories',
  description: 'Deletes a category',
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
  return asTextContentResult(await client.cloudforceOne.threatEvents.categories.delete(category_id, body));
};

export default { metadata, tool, handler };
