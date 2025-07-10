// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.members',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/members/{member_id}',
  operationId: 'account-members-member-details',
};

export const tool: Tool = {
  name: 'get_accounts_members',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet information about a specific member of an account.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'Account Identifier',
        description: 'Account identifier tag.',
      },
      member_id: {
        type: 'string',
        description: 'Membership identifier tag.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { member_id, ...body } = args as any;
  return asTextContentResult(await client.accounts.members.get(member_id, body));
};

export default { metadata, tool, handler };
