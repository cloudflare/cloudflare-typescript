// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'iam.user_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/iam/user_groups',
  operationId: 'account-user-group-list',
};

export const tool: Tool = {
  name: 'list_iam_user_groups',
  description: 'List all the user groups for an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'Account Identifier',
        description: 'Account identifier tag.',
      },
      id: {
        type: 'string',
        title: 'User Group Identifier',
        description: 'ID of the user group to be fetched.',
      },
      direction: {
        type: 'string',
        description:
          'The sort order of returned user groups by name. Default sort order is ascending. To switch to descending, set this parameter to "desc"',
      },
      fuzzyName: {
        type: 'string',
        description: 'A string used for searching for user groups containing that substring.',
      },
      name: {
        type: 'string',
        description: 'Name of the user group to be fetched.',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.iam.userGroups.list(body);
};

export default { metadata, tool, handler };
