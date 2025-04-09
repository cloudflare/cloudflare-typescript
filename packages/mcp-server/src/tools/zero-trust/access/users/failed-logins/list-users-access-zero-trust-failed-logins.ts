// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.users.failed_logins',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_users_access_zero_trust_failed_logins',
  description: 'Get all failed login attempts for a single user.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      user_id: {
        type: 'string',
        description: 'UUID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { user_id, ...body } = args;
  return client.zeroTrust.access.users.failedLogins.list(user_id, body);
};

export default { metadata, tool, handler };
