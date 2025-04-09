// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.event_notifications',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_buckets_r2_event_notifications',
  description:
    'Delete an event notification rule. **If no body is provided, all rules for specified queue will be deleted**.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account ID',
      },
      bucket_name: {
        type: 'string',
        description: 'Name of the bucket',
      },
      queue_id: {
        type: 'string',
        description: 'Queue ID',
      },
      jurisdiction: {
        type: 'string',
        description: 'The bucket jurisdiction',
        enum: ['default', 'eu', 'fedramp'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { queue_id, ...body } = args;
  return client.r2.buckets.eventNotifications.delete(queue_id, body);
};

export default { metadata, tool, handler };
