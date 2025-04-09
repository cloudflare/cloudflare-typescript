// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.roles',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_accounts_roles',
  description: 'Get information about a specific role for an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      role_id: {
        type: 'string',
        description: 'Role identifier tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { role_id, ...body } = args;
  return client.accounts.roles.get(role_id, body);
};

export default { metadata, tool, handler };
