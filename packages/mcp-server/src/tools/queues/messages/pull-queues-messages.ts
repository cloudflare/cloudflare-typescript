// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'queues.messages',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'pull_queues_messages',
  description: 'Pull a batch of messages from a Queue',
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
      batch_size: {
        type: 'number',
        description: 'The maximum number of messages to include in a batch.',
      },
      visibility_timeout_ms: {
        type: 'number',
        description:
          'The number of milliseconds that a message is exclusively leased. After the timeout, the message becomes available for another attempt.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { queue_id, ...body } = args;
  return client.queues.messages.pull(queue_id, body);
};

export default { metadata, tool, handler };
