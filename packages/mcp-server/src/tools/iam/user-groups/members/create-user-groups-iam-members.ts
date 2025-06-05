// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'iam.user_groups.members',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/iam/user_groups/{user_group_id}/members',
  operationId: 'account-user-group-member-create',
};

export const tool: Tool = {
  name: 'create_user_groups_iam_members',
  description: 'Add members to a User Group.',
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
      body: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              title: 'User Group Member Identifier',
              description: 'The identifier of an existing account Member.',
            },
          },
          required: ['id'],
        },
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { user_group_id, ...body } = args as any;
  return asTextContentResult(await client.iam.userGroups.members.create(user_group_id, body));
};

export default { metadata, tool, handler };
