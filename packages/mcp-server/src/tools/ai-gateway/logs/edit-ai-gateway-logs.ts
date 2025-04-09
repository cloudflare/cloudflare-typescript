// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway.logs',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_ai_gateway_logs',
  description: 'Patch Gateway Log',
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
      feedback: {
        type: 'number',
      },
      metadata: {
        type: 'object',
      },
      score: {
        type: 'number',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { id, ...body } = args;
  return client.aiGateway.logs.edit(id, body);
};

export default { metadata, tool, handler };
