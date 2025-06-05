// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'iam.user_groups.members',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/iam/user_groups/{user_group_id}/members/{member_id}',
  operationId: 'account-user-group-member-delete',
};

export const tool: Tool = {
  name: 'delete_user_groups_iam_members',
  description: 'Remove a member from User Group',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'Account Identifier',
        description: 'Account identifier tag.',
      },
      user_group_id: {
        type: 'string',
        title: 'User Group Identifier',
        description: 'User Group identifier tag.',
      },
      member_id: {
        type: 'string',
        title: 'User Group Member Identifier',
        description: 'The identifier of an existing account Member.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { member_id, ...body } = args as any;
  return asTextContentResult(await client.iam.userGroups.members.delete(member_id, body));
};

export default { metadata, tool, handler };
