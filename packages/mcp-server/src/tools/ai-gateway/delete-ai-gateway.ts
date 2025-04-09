// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_ai_gateway',
  description: 'Delete a Gateway',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      id: {
        type: 'string',
        description: 'gateway id',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { id, ...body } = args;
  return client.aiGateway.delete(id, body);
};

export default { metadata, tool, handler };
