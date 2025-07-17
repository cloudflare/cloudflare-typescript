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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate event notification rule.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    result: {\n      type: 'object'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'bucket_name', 'queue_id'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { queue_id, ...body } = args as any;
  return asTextContentResult((await client.r2.buckets.eventNotifications.update(queue_id, body)) as object);
};

export default { metadata, tool, handler };
