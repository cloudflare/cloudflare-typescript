// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway.evaluations',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_ai_gateway_evaluations',
  description: 'List Evaluations',
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
      name: {
        type: 'string',
      },
      page: {
        type: 'integer',
      },
      per_page: {
        type: 'integer',
      },
      processed: {
        type: 'boolean',
      },
      search: {
        type: 'string',
        description: 'Search by id, name',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { gateway_id, ...body } = args;
  return client.aiGateway.evaluations.list(gateway_id, body);
};

export default { metadata, tool, handler };
