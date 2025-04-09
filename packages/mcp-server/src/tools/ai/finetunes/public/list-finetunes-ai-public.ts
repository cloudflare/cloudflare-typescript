// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ai.finetunes.public',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_finetunes_ai_public',
  description: 'List Public Finetunes',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      limit: {
        type: 'number',
        description: 'Pagination Limit',
      },
      offset: {
        type: 'number',
        description: 'Pagination Offset',
      },
      orderBy: {
        type: 'string',
        description: 'Order By Column Name',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.ai.finetunes.public.list(body);
};

export default { metadata, tool, handler };
