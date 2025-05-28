// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.lists.items',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/gateway/lists/{list_id}/items',
  operationId: 'zero-trust-lists-zero-trust-list-items',
};

export const tool: Tool = {
  name: 'list_lists_gateway_zero_trust_items',
  description: 'Fetches all items in a single Zero Trust list.',
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
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { list_id, ...body } = args as any;
  return client.zeroTrust.gateway.lists.items.list(list_id, body);
};

export default { metadata, tool, handler };
