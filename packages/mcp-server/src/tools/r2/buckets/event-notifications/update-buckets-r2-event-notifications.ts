// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.event_notifications',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/event_notifications/r2/{bucket_name}/configuration/queues/{queue_id}',
  operationId: 'r2-put-event-notification-config',
};

export const tool: Tool = {
  name: 'update_buckets_r2_event_notifications',
  description: 'Create event notification rule.',
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
      rules: {
        type: 'array',
        description: 'Array of rules to drive notifications.',
        items: {
          type: 'object',
          properties: {
            actions: {
              type: 'array',
              description: 'Array of R2 object actions that will trigger notifications.',
              items: {
                type: 'string',
                enum: [
                  'PutObject',
                  'CopyObject',
                  'DeleteObject',
                  'CompleteMultipartUpload',
                  'LifecycleDeletion',
                ],
              },
            },
            description: {
              type: 'string',
              description:
                'A description that can be used to identify the event notification rule after creation.',
            },
            prefix: {
              type: 'string',
              description: 'Notifications will be sent only for objects with this prefix.',
            },
            suffix: {
              type: 'string',
              description: 'Notifications will be sent only for objects with this suffix.',
            },
          },
          required: ['actions'],
        },
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
  return asTextContentResult((await client.r2.buckets.eventNotifications.update(queue_id, body)) as object);
};

export default { metadata, tool, handler };
