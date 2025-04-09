// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.billing.history',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_billing_user_history',
  description: 'Accesses your billing history object.',
  inputSchema: {
    type: 'object',
    properties: {
      action: {
        type: 'string',
        description: 'The billing item action.',
      },
      occurred_at: {
        type: 'string',
        description: 'When the billing item was created.',
        format: 'date-time',
      },
      order: {
        type: 'string',
        description: 'Field to order billing history by.',
        enum: ['type', 'occurred_at', 'action'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of items per page.',
      },
      type: {
        type: 'string',
        description: 'The billing item type.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.user.billing.history.list(body);
};

export default { metadata, tool, handler };
