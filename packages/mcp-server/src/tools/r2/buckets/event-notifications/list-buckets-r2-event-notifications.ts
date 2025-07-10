// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'r2.buckets.event_notifications',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/event_notifications/r2/{bucket_name}/configuration',
  operationId: 'r2-get-event-notification-configs',
};

export const tool: Tool = {
  name: 'list_buckets_r2_event_notifications',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all event notification rules for a bucket.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        bucketName: {\n          type: 'string',\n          description: 'Name of the bucket.'\n        },\n        queues: {\n          type: 'array',\n          description: 'List of queues associated with the bucket.',\n          items: {\n            type: 'object',\n            properties: {\n              queueId: {\n                type: 'string',\n                description: 'Queue ID.'\n              },\n              queueName: {\n                type: 'string',\n                description: 'Name of the queue.'\n              },\n              rules: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    actions: {\n                      type: 'array',\n                      description: 'Array of R2 object actions that will trigger notifications.',\n                      items: {\n                        type: 'string',\n                        enum: [                          'PutObject',\n                          'CopyObject',\n                          'DeleteObject',\n                          'CompleteMultipartUpload',\n                          'LifecycleDeletion'\n                        ]\n                      }\n                    },\n                    createdAt: {\n                      type: 'string',\n                      description: 'Timestamp when the rule was created.'\n                    },\n                    description: {\n                      type: 'string',\n                      description: 'A description that can be used to identify the event notification rule after creation.'\n                    },\n                    prefix: {\n                      type: 'string',\n                      description: 'Notifications will be sent only for objects with this prefix.'\n                    },\n                    ruleId: {\n                      type: 'string',\n                      description: 'Rule ID.'\n                    },\n                    suffix: {\n                      type: 'string',\n                      description: 'Notifications will be sent only for objects with this suffix.'\n                    }\n                  },\n                  required: [                    'actions'\n                  ]\n                }\n              }\n            },\n            required: []\n          }\n        }\n      },\n      required: []\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
      jurisdiction: {
        type: 'string',
        description: 'Jurisdiction where objects in this bucket are guaranteed to be stored.',
        enum: ['default', 'eu', 'fedramp'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { bucket_name, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.r2.buckets.eventNotifications.list(bucket_name, body)),
  );
};

export default { metadata, tool, handler };
