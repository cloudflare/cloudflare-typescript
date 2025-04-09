// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.tokens.value',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_tokens_accounts_value',
  description: 'Roll the Account Owned API token secret.',
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
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { token_id, ...body } = args;
  return client.accounts.tokens.value.update(token_id, body);
};

export default { metadata, tool, handler };
