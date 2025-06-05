// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.lists',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/gateway/lists/{list_id}',
  operationId: 'zero-trust-lists-patch-zero-trust-list',
};

export const tool: Tool = {
  name: 'edit_gateway_zero_trust_lists',
  description: 'Appends or removes an item from a configured Zero Trust list.',
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
      append: {
        type: 'array',
        description: 'The items in the list.',
        items: {
          $ref: '#/$defs/gateway_item',
        },
      },
      remove: {
        type: 'array',
        description: 'A list of the item values you want to remove.',
        items: {
          type: 'string',
          description: 'The value of the item in a list.',
        },
      },
    },
    $defs: {
      gateway_item: {
        type: 'object',
        properties: {
          created_at: {
            type: 'string',
            format: 'date-time',
          },
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
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { list_id, ...body } = args as any;
  return asTextContentResult(await client.zeroTrust.gateway.lists.edit(list_id, body));
};

export default { metadata, tool, handler };
