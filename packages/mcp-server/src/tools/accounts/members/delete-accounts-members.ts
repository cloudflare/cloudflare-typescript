// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.members',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_accounts_members',
  description: 'Remove a member from an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      member_id: {
        type: 'string',
        description: 'Membership identifier tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { member_id, ...body } = args;
  return client.accounts.members.delete(member_id, body);
};

export default { metadata, tool, handler };
