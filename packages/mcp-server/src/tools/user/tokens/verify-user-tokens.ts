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
  httpPath: '/user/tokens/verify',
  operationId: 'user-api-tokens-verify-token',
};

export const tool: Tool = {
  name: 'verify_user_tokens',
  description: 'Test whether a token works.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.user.tokens.verify());
};

export default { metadata, tool, handler };
