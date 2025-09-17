// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.lists',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/gateway/lists/{list_id}',
  operationId: 'zero-trust-lists-delete-zero-trust-list',
};

export const tool: Tool = {
  name: 'delete_gateway_zero_trust_lists',
  description: 'Deletes a Zero Trust list.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      list_id: {
        type: 'string',
        description: 'API Resource UUID tag.',
      },
    },
    required: ['account_id', 'list_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { list_id, ...body } = args as any;
  return asTextContentResult((await client.zeroTrust.gateway.lists.delete(list_id, body)) as object);
};

export default { metadata, tool, handler };
