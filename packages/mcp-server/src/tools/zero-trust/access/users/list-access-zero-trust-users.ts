// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.users',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_access_zero_trust_users',
  description: 'Gets a list of users for an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      email: {
        type: 'string',
        description: 'The email of the user.',
      },
      name: {
        type: 'string',
        description: 'The name of the user.',
      },
      search: {
        type: 'string',
        description: 'Search for users by other listed query parameters.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.access.users.list(body);
};

export default { metadata, tool, handler };
