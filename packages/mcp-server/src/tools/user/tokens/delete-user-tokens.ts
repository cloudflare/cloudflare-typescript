// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.tokens',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_user_tokens',
  description: 'Destroy a token.',
  inputSchema: {
    type: 'object',
    properties: {
      token_id: {
        type: 'string',
        description: 'Token identifier tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { token_id } = args;
  return client.user.tokens.delete(token_id);
};

export default { metadata, tool, handler };
