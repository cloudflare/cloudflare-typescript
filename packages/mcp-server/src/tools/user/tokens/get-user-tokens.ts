// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user.tokens',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user/tokens/{token_id}',
  operationId: 'user-api-tokens-token-details',
};

export const tool: Tool = {
  name: 'get_user_tokens',
  description: 'Get information about a specific token.',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { token_id, ...body } = args as any;
  return asTextContentResult(await client.user.tokens.get(token_id));
};

export default { metadata, tool, handler };
