// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

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
        title: 'Account Identifier',
        description: 'Account identifier tag.',
      },
      name: {
        type: 'string',
        description: 'Filter by the name of the permission group.\nThe value must be URL-encoded.',
      },
      scope: {
        type: 'string',
        description: 'Filter by the scope of the permission group.\nThe value must be URL-encoded.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.accounts.tokens.permissionGroups.list(body));
};

export default { metadata, tool, handler };
