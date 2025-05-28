// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.event_notifications',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/event_notifications/r2/{bucket_name}/configuration/queues/{queue_id}',
  operationId: 'r2-get-event-notification-config',
};

export const tool: Tool = {
  name: 'get_buckets_r2_event_notifications',
  description: 'Get a single event notification rule.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID.',
      },
      bucket_name: {
        type: 'string',
        description: 'Name of the bucket.',
      },
      queue_id: {
        type: 'string',
        description: 'Queue ID.',
      },
      jurisdiction: {
        type: 'string',
        description: 'The bucket jurisdiction.',
        enum: ['default', 'eu', 'fedramp'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { queue_id, ...body } = args as any;
  return client.r2.buckets.eventNotifications.get(queue_id, body);
};

export default { metadata, tool, handler };
