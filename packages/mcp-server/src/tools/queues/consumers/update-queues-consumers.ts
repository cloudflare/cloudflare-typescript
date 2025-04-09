// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'queues.consumers',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_queues_consumers',
  description: 'Updates the consumer for a queue, or creates one if it does not exist.',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
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
          consumer_id: {
            type: 'string',
            description: 'A Resource identifier.',
          },
          dead_letter_queue: {
            type: 'string',
          },
          script_name: {
            type: 'string',
            description: 'Name of a Worker',
          },
          settings: {
            type: 'object',
            properties: {
              batch_size: {
                type: 'number',
                description: 'The maximum number of messages to include in a batch.',
              },
              max_concurrency: {
                type: 'number',
                description:
                  "Maximum number of concurrent consumers that may consume from this Queue. Set to `null` to automatically opt in to the platform's maximum (recommended).",
              },
              max_retries: {
                type: 'number',
                description: 'The maximum number of retries',
              },
              max_wait_time_ms: {
                type: 'number',
                description:
                  'The number of milliseconds to wait for a batch to fill up before attempting to deliver it',
              },
              retry_delay: {
                type: 'number',
                description:
                  'The number of seconds to delay before making the message available for another attempt.',
              },
            },
            required: [],
          },
          type: {
            type: 'string',
            enum: ['worker'],
          },
        },
      },
      {
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
          consumer_id: {
            type: 'string',
            description: 'A Resource identifier.',
          },
          dead_letter_queue: {
            type: 'string',
          },
          settings: {
            type: 'object',
            properties: {
              batch_size: {
                type: 'number',
                description: 'The maximum number of messages to include in a batch.',
              },
              max_retries: {
                type: 'number',
                description: 'The maximum number of retries',
              },
              retry_delay: {
                type: 'number',
                description:
                  'The number of seconds to delay before making the message available for another attempt.',
              },
              visibility_timeout_ms: {
                type: 'number',
                description:
                  'The number of milliseconds that a message is exclusively leased. After the timeout, the message becomes available for another attempt.',
              },
            },
            required: [],
          },
          type: {
            type: 'string',
            enum: ['http_pull'],
          },
        },
      },
    ],
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { consumer_id, ...body } = args;
  return client.queues.consumers.update(consumer_id, body);
};

export default { metadata, tool, handler };
