// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'cloudforce_one.threat_events.categories',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_threat_events_cloudforce_one_categories',
  description: 'Deletes a category',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'number',
        description: 'Account ID',
      },
      category_id: {
        type: 'string',
        description: 'Category UUID',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { category_id, ...body } = args;
  return client.cloudforceOne.threatEvents.categories.delete(category_id, body);
};

export default { metadata, tool, handler };
