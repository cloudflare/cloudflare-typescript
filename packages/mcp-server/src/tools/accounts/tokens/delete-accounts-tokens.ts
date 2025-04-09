// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.tokens',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_accounts_tokens',
  description: 'Destroy an Account Owned API token.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
      token_id: {
        type: 'string',
        description: 'Token identifier tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { token_id, ...body } = args;
  return client.accounts.tokens.delete(token_id, body);
};

export default { metadata, tool, handler };
