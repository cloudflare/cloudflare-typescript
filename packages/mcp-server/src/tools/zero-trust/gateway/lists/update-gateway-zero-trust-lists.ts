// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.lists',
  operation: 'write',
  tags: [],
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
        description: 'The items in the list.',
        items: {
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
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { list_id, ...body } = args;
  return client.zeroTrust.gateway.lists.update(list_id, body);
};

export default { metadata, tool, handler };
