// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai_gateway.urls',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_ai_gateway_urls',
  description: 'Get Gateway URL',
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
      provider: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { provider, ...body } = args;
  return client.aiGateway.urls.get(provider, body);
};

export default { metadata, tool, handler };
