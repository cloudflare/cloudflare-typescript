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
  name: 'update_buckets_r2_event_notifications',
  description: 'Create event notification rule.',
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
      rules: {
        type: 'array',
        description: 'Array of rules to drive notifications',
        items: {
          type: 'object',
          properties: {
            actions: {
              type: 'array',
              description: 'Array of R2 object actions that will trigger notifications',
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
                'A description that can be used to identify the event notification rule after creation',
            },
            prefix: {
              type: 'string',
              description: 'Notifications will be sent only for objects with this prefix',
            },
            suffix: {
              type: 'string',
              description: 'Notifications will be sent only for objects with this suffix',
            },
          },
          required: ['actions'],
        },
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
  return client.r2.buckets.eventNotifications.update(queue_id, body);
};

export default { metadata, tool, handler };
