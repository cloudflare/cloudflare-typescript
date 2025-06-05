// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.users.last_seen_identity',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/access/users/{user_id}/last_seen_identity',
  operationId: 'zero-trust-users-get-last-seen-identity',
};

export const tool: Tool = {
  name: 'get_users_access_zero_trust_last_seen_identity',
  description: 'Get last seen identity for a single user.',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { user_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.access.users.lastSeenIdentity.get(user_id, body));
};

export default { metadata, tool, handler };
