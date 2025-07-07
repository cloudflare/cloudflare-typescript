// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.tokens.permission_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user/tokens/permission_groups',
  operationId: 'permission-groups-list-permission-groups',
};

export const tool: Tool = {
  name: 'list_tokens_user_permission_groups',
  description: 'Find all available permission groups for API Tokens',
  inputSchema: {
    type: 'object',
    properties: {
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
  return asTextContentResult(await client.user.tokens.permissionGroups.list(body));
};

export default { metadata, tool, handler };
