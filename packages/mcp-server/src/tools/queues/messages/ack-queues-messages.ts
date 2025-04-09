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
  name: 'ack_queues_messages',
  description: 'Acknowledge + Retry messages from a Queue',
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
      acks: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            lease_id: {
              type: 'string',
              description:
                'An ID that represents an "in-flight" message that has been pulled from a Queue. You must hold on to this ID and use it to acknowledge this message.',
            },
          },
          required: [],
        },
      },
      retries: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            delay_seconds: {
              type: 'number',
              description:
                'The number of seconds to delay before making the message available for another attempt.',
            },
            lease_id: {
              type: 'string',
              description:
                'An ID that represents an "in-flight" message that has been pulled from a Queue. You must hold on to this ID and use it to acknowledge this message.',
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { queue_id, ...body } = args;
  return client.queues.messages.ack(queue_id, body);
};

export default { metadata, tool, handler };
