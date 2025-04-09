// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'queues.purge',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'start_queues_purge',
  description: 'Deletes all messages from the Queue.',
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
      delete_messages_permanently: {
        type: 'boolean',
        description: 'Confimation that all messages will be deleted permanently.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { queue_id, ...body } = args;
  return client.queues.purge.start(queue_id, body);
};

export default { metadata, tool, handler };
