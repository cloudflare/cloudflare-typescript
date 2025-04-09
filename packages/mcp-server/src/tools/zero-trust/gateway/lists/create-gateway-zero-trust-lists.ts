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
  name: 'create_gateway_zero_trust_lists',
  description: 'Creates a new Zero Trust list.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'The name of the list.',
      },
      type: {
        type: 'string',
        description: 'The type of list.',
        enum: ['SERIAL', 'URL', 'DOMAIN', 'EMAIL', 'IP'],
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
  const { ...body } = args;
  return client.zeroTrust.gateway.lists.create(body);
};

export default { metadata, tool, handler };
