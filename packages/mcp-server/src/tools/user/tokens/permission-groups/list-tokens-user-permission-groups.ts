// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.tokens.permission_groups',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_tokens_user_permission_groups',
  description: 'Find all available permission groups for API Tokens',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const {} = args;
  return client.user.tokens.permissionGroups.list();
};

export default { metadata, tool, handler };
