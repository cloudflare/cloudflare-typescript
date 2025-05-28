// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.searches',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/load_balancers/search',
  operationId: 'account-load-balancer-search-search-resources',
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
      query: {
        type: 'string',
        description: 'Search query term.',
      },
      references: {
        type: 'string',
        description:
          'The type of references to include. "*" to include both referral and referrer references. "" to not include any reference information.',
        enum: ['', '*', 'referral', 'referrer'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.loadBalancers.searches.list(body);
};

export default { metadata, tool, handler };
