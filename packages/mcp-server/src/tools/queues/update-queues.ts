// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'queues',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/queues/{queue_id}',
  operationId: 'queues-update',
};

export const tool: Tool = {
  name: 'update_queues',
  description:
    "Updates a Queue. Note that this endpoint does not support partial updates. If successful, the Queue's configuration is overwritten with the supplied configuration.",
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
      queue_name: {
        type: 'string',
      },
      settings: {
        type: 'object',
        properties: {
          delivery_delay: {
            type: 'number',
            description: 'Number of seconds to delay delivery of all messages to consumers.',
          },
          delivery_paused: {
            type: 'boolean',
            description: 'Indicates if message delivery to consumers is currently paused.',
          },
          message_retention_period: {
            type: 'number',
            description: 'Number of seconds after which an unconsumed message will be delayed.',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { queue_id, ...body } = args as any;
  return asTextContentResult(await client.queues.update(queue_id, body));
};

export default { metadata, tool, handler };
