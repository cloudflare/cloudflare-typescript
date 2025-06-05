// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.tokens',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/tokens/{token_id}',
  operationId: 'account-api-tokens-token-details',
};

export const tool: Tool = {
  name: 'get_accounts_tokens',
  description: 'Get information about a specific Account Owned API token.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        title: 'Account Identifier',
        description: 'Account identifier tag.',
      },
      token_id: {
        type: 'string',
        description: 'Token identifier tag.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { token_id, ...body } = args as any;
  return asTextContentResult(await client.accounts.tokens.get(token_id, body));
};

export default { metadata, tool, handler };
