// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_ai_gateway',
  description: 'List Gateways',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      page: {
        type: 'integer',
      },
      per_page: {
        type: 'integer',
      },
      search: {
        type: 'string',
        description: 'Search by id',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.aiGateway.list(body);
};

export default { metadata, tool, handler };
