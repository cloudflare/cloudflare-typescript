// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.tokens.value',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_tokens_user_value',
  description: 'Roll the token secret.',
  inputSchema: {
    type: 'object',
    properties: {
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
  return client.user.tokens.value.update(token_id, body);
};

export default { metadata, tool, handler };
