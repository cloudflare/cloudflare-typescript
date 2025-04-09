// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai.finetunes',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_ai_finetunes',
  description: 'Create a new Finetune',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      model: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      public: {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.ai.finetunes.create(body);
};

export default { metadata, tool, handler };
