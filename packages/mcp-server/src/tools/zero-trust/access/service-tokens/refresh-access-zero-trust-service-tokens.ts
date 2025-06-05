// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.service_tokens',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/access/service_tokens/{service_token_id}/refresh',
  operationId: 'access-service-tokens-refresh-a-service-token',
};

export const tool: Tool = {
  name: 'refresh_access_zero_trust_service_tokens',
  description: 'Refreshes the expiration of a service token.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      service_token_id: {
        type: 'string',
        description: 'UUID.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { service_token_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.access.serviceTokens.refresh(service_token_id, body));
};

export default { metadata, tool, handler };
