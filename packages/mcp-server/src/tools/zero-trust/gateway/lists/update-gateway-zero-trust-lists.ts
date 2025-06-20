// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.lists',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/gateway/lists/{list_id}',
  operationId: 'zero-trust-lists-update-zero-trust-list',
};

export const tool: Tool = {
  name: 'update_gateway_zero_trust_lists',
  description:
    'Updates a configured Zero Trust list. Skips updating list items if not included in the payload.',
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
      name: {
        type: 'string',
        description: 'The name of the list.',
      },
      description: {
        type: 'string',
        description: 'The description of the list.',
      },
      items: {
        type: 'array',
        description: 'items to add to the list.',
        items: {
          type: 'object',
          properties: {
            description: {
              type: 'string',
              description: 'The description of the list item, if present',
            },
            value: {
              type: 'string',
              description: 'The value of the item in a list.',
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { list_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.gateway.lists.update(list_id, body));
};

export default { metadata, tool, handler };
