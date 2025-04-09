// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'queues',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_queues',
  description: 'Get details about a specific queue.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'A Resource identifier.',
      },
      queue_id: {
        type: 'string',
        description: 'A Resource identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { queue_id, ...body } = args;
  return client.queues.get(queue_id, body);
};

export default { metadata, tool, handler };
