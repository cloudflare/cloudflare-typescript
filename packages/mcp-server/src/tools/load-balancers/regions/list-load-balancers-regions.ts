// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'load_balancers.regions',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_load_balancers_regions',
  description: 'List all region mappings.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      country_code_a2: {
        type: 'string',
        description: 'Two-letter alpha-2 country code followed in ISO 3166-1.',
      },
      subdivision_code: {
        type: 'string',
        description: 'Two-letter subdivision code followed in ISO 3166-2.',
      },
      subdivision_code_a2: {
        type: 'string',
        description: 'Two-letter subdivision code followed in ISO 3166-2.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.loadBalancers.regions.list(body);
};

export default { metadata, tool, handler };
