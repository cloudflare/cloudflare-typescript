// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway.logs',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'response_ai_gateway_logs',
  description: 'Get Gateway Log Response',
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
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { id, ...body } = args;
  return client.aiGateway.logs.response(id, body);
};

export default { metadata, tool, handler };
