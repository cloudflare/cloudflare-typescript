// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'iam.user_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/iam/user_groups/{user_group_id}',
  operationId: 'account-user-group-details',
};

export const tool: Tool = {
  name: 'get_iam_user_groups',
  description: 'Get information about a specific user group in an account.',
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
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { user_group_id, ...body } = args as any;
  return asTextContentResult(await client.iam.userGroups.get(user_group_id, body));
};

export default { metadata, tool, handler };
