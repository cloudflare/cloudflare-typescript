// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.subscriptions',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_accounts_subscriptions',
  description: "Deletes an account's subscription.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      subscription_identifier: {
        type: 'string',
        description: 'Subscription identifier tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { subscription_identifier, ...body } = args;
  return client.accounts.subscriptions.delete(subscription_identifier, body);
};

export default { metadata, tool, handler };
