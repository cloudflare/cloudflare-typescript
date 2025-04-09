// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.subscriptions',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_user_subscriptions',
  description: "Deletes a user's subscription.",
  inputSchema: {
    type: 'object',
    properties: {
      identifier: {
        type: 'string',
        description: 'Subscription identifier tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { identifier } = args;
  return client.user.subscriptions.delete(identifier);
};

export default { metadata, tool, handler };
