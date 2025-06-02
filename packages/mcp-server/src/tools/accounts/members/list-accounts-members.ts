// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.members',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/members',
  operationId: 'account-members-list-members',
};

export const tool: Tool = {
  name: 'list_accounts_members',
  description: 'List all members of an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'Account Identifier',
        description: 'Account identifier tag.',
      },
      direction: {
        type: 'string',
        description: 'Direction to order results.',
        enum: ['asc', 'desc'],
      },
      order: {
        type: 'string',
        description: 'Field to order results by.',
        enum: ['user.first_name', 'user.last_name', 'user.email', 'status'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Maximum number of results per page.',
      },
      status: {
        type: 'string',
        description: "A member's status in the account.",
        enum: ['accepted', 'pending', 'rejected'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.accounts.members.list(body);
};

export default { metadata, tool, handler };
