// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway.datasets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_ai_gateway_datasets',
  description: 'List Datasets',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      gateway_id: {
        type: 'string',
        description: 'gateway id',
      },
      enable: {
        type: 'boolean',
      },
      name: {
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
        description: 'Search by id, name, filters',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { gateway_id, ...body } = args;
  return client.aiGateway.datasets.list(gateway_id, body);
};

export default { metadata, tool, handler };
