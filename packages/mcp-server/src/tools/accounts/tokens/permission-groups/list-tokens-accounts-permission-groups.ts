// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.tokens.permission_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/tokens/permission_groups',
  operationId: 'account-api-tokens-list-permission-groups',
};

export const tool: Tool = {
  name: 'list_tokens_accounts_permission_groups',
  description: 'Find all available permission groups for Account Owned API Tokens',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.accounts.tokens.permissionGroups.list(body);
};

export default { metadata, tool, handler };
