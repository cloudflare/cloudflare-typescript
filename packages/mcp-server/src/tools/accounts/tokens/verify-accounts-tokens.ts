// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.tokens',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'verify_accounts_tokens',
  description: 'Test whether a token works.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.accounts.tokens.verify(body);
};

export default { metadata, tool, handler };
