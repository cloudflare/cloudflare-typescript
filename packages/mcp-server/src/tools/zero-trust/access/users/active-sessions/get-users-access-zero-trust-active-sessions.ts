// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.users.active_sessions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/access/users/{user_id}/active_sessions/{nonce}',
  operationId: 'zero-trust-users-get-active-session',
};

export const tool: Tool = {
  name: 'get_users_access_zero_trust_active_sessions',
  description: 'Get an active session for a single user.',
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
      nonce: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { nonce, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.access.users.activeSessions.get(nonce, body));
};

export default { metadata, tool, handler };
