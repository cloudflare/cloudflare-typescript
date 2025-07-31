// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.event_notifications',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/event_notifications/r2/{bucket_name}/configuration/queues/{queue_id}',
  operationId: 'r2-event-notification-delete-config',
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
        description: 'Jurisdiction where objects in this bucket are guaranteed to be stored.',
        enum: ['default', 'eu', 'fedramp'],
      },
    },
    required: ['account_id', 'bucket_name', 'queue_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { queue_id, ...body } = args as any;
  return asTextContentResult((await client.r2.buckets.eventNotifications.delete(queue_id, body)) as object);
};

export default { metadata, tool, handler };
