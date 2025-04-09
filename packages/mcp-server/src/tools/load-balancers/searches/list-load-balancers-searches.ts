// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.searches',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_load_balancers_searches',
  description: 'Search for Load Balancing resources.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      page: {
        type: 'number',
      },
      per_page: {
        type: 'number',
      },
      search_params: {
        type: 'object',
        properties: {
          query: {
            type: 'string',
            description: 'Search query term.',
          },
          references: {
            type: 'string',
            description: 'The type of references to include ("*" for all).',
            enum: ['', '*', 'referral', 'referrer'],
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.loadBalancers.searches.list(body);
};

export default { metadata, tool, handler };
