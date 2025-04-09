// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_accounts',
  description:
    'Delete a specific account (only available for tenant admins at this time). This is a permanent operation that will delete any zones or other resources under the account',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'The account ID of the account to be deleted',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.accounts.delete(body);
};

export default { metadata, tool, handler };
