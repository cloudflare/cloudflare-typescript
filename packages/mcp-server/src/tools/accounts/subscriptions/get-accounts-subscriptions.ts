// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.subscriptions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/subscriptions',
  operationId: 'account-subscriptions-list-subscriptions',
};

export const tool: Tool = {
  name: 'get_accounts_subscriptions',
  description: "Lists all of an account's subscriptions.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.accounts.subscriptions.get(body);
};

export default { metadata, tool, handler };
