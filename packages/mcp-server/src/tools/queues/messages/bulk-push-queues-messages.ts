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
  name: 'bulk_push_queues_messages',
  description: 'Push a batch of message to a Queue',
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
      delay_seconds: {
        type: 'number',
        description: 'The number of seconds to wait for attempting to deliver this batch to consumers',
      },
      messages: {
        type: 'array',
        items: {
          anyOf: [
            {
              type: 'object',
              properties: {
                body: {
                  type: 'string',
                },
                content_type: {
                  type: 'string',
                  enum: ['text'],
                },
                delay_seconds: {
                  type: 'number',
                  description:
                    'The number of seconds to wait for attempting to deliver this message to consumers',
                },
              },
              required: [],
            },
            {
              type: 'object',
              properties: {
                body: {
                  type: 'object',
                },
                content_type: {
                  type: 'string',
                  enum: ['json'],
                },
                delay_seconds: {
                  type: 'number',
                  description:
                    'The number of seconds to wait for attempting to deliver this message to consumers',
                },
              },
              required: [],
            },
          ],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { queue_id, ...body } = args as any;
  return client.queues.messages.bulkPush(queue_id, body);
};

export default { metadata, tool, handler };
