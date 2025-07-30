// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'queues.messages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/queues/{queue_id}/messages/pull',
  operationId: 'queues-pull-messages',
};

export const tool: Tool = {
  name: 'pull_queues_messages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPull a batch of messages from a Queue\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        message_backlog_count: {\n          type: 'number',\n          description: 'The number of unacknowledged messages in the queue'\n        },\n        messages: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              attempts: {\n                type: 'number'\n              },\n              body: {\n                type: 'string'\n              },\n              lease_id: {\n                type: 'string',\n                description: 'An ID that represents an \"in-flight\" message that has been pulled from a Queue. You must hold on to this ID and use it to acknowledge this message.'\n              },\n              metadata: {\n                type: 'object'\n              },\n              timestamp_ms: {\n                type: 'number'\n              }\n            }\n          }\n        }\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Indicates if the API call was successful or not.',\n      enum: [        true\n      ]\n    }\n  },\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
      batch_size: {
        type: 'number',
        description: 'The maximum number of messages to include in a batch.',
      },
      visibility_timeout_ms: {
        type: 'number',
        description:
          'The number of milliseconds that a message is exclusively leased. After the timeout, the message becomes available for another attempt.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'queue_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { queue_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.queues.messages.pull(queue_id, body)));
};

export default { metadata, tool, handler };
