// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.categories',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/cloudforce-one/events/categories/{category_id}',
  operationId: 'patch_CategoryUpdate',
};

export const tool: Tool = {
  name: 'edit_threat_events_cloudforce_one_categories',
  description: 'Updates a category',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'number',
        description: 'Account ID.',
      },
      category_id: {
        type: 'string',
        description: 'Category UUID.',
      },
      killChain: {
        type: 'number',
      },
      mitreAttack: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      name: {
        type: 'string',
      },
      shortname: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { category_id, ...body } = args as any;
  return client.cloudforceOne.threatEvents.categories.edit(category_id, body);
};

export default { metadata, tool, handler };
