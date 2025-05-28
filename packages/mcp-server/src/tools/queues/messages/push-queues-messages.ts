// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'queues.messages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/queues/{queue_id}/messages',
  operationId: 'queues-push-message',
};

export const tool: Tool = {
  name: 'push_queues_messages',
  description: 'Push a message to a Queue',
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
          body: {
            type: 'string',
          },
          content_type: {
            type: 'string',
            enum: ['text'],
          },
          delay_seconds: {
            type: 'number',
            description: 'The number of seconds to wait for attempting to deliver this message to consumers',
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
          body: {
            type: 'object',
          },
          content_type: {
            type: 'string',
            enum: ['json'],
          },
          delay_seconds: {
            type: 'number',
            description: 'The number of seconds to wait for attempting to deliver this message to consumers',
          },
        },
      },
    ],
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { queue_id, ...body } = args as any;
  return client.queues.messages.push(queue_id, body);
};

export default { metadata, tool, handler };
