// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'iam.user_groups.members',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/iam/user_groups/{user_group_id}/members',
  operationId: 'account-user-group-member-list',
};

export const tool: Tool = {
  name: 'list_user_groups_iam_members',
  description: 'List all the members attached to a user group.',
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
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Maximum number of results per page.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { user_group_id, ...body } = args as any;
  return asTextContentResult(await client.iam.userGroups.members.list(user_group_id, body));
};

export default { metadata, tool, handler };
