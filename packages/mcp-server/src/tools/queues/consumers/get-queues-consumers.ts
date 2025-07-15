// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'queues.consumers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/queues/{queue_id}/consumers',
  operationId: 'queues-list-consumers',
};

export const tool: Tool = {
  name: 'get_queues_consumers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the consumers for a Queue\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/consumer'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Indicates if the API call was successful or not.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    consumer: {\n      anyOf: [        {\n          type: 'object',\n          properties: {\n            consumer_id: {\n              type: 'string',\n              description: 'A Resource identifier.'\n            },\n            created_on: {\n              type: 'string'\n            },\n            queue_id: {\n              type: 'string',\n              description: 'A Resource identifier.'\n            },\n            script: {\n              type: 'string',\n              description: 'Name of a Worker'\n            },\n            script_name: {\n              type: 'string',\n              description: 'Name of a Worker'\n            },\n            settings: {\n              type: 'object',\n              properties: {\n                batch_size: {\n                  type: 'number',\n                  description: 'The maximum number of messages to include in a batch.'\n                },\n                max_concurrency: {\n                  type: 'number',\n                  description: 'Maximum number of concurrent consumers that may consume from this Queue. Set to `null` to automatically opt in to the platform\\'s maximum (recommended).'\n                },\n                max_retries: {\n                  type: 'number',\n                  description: 'The maximum number of retries'\n                },\n                max_wait_time_ms: {\n                  type: 'number',\n                  description: 'The number of milliseconds to wait for a batch to fill up before attempting to deliver it'\n                },\n                retry_delay: {\n                  type: 'number',\n                  description: 'The number of seconds to delay before making the message available for another attempt.'\n                }\n              },\n              required: []\n            },\n            type: {\n              type: 'string',\n              enum: [                'worker'\n              ]\n            }\n          },\n          required: []\n        },\n        {\n          type: 'object',\n          properties: {\n            consumer_id: {\n              type: 'string',\n              description: 'A Resource identifier.'\n            },\n            created_on: {\n              type: 'string'\n            },\n            queue_id: {\n              type: 'string',\n              description: 'A Resource identifier.'\n            },\n            settings: {\n              type: 'object',\n              properties: {\n                batch_size: {\n                  type: 'number',\n                  description: 'The maximum number of messages to include in a batch.'\n                },\n                max_retries: {\n                  type: 'number',\n                  description: 'The maximum number of retries'\n                },\n                retry_delay: {\n                  type: 'number',\n                  description: 'The number of seconds to delay before making the message available for another attempt.'\n                },\n                visibility_timeout_ms: {\n                  type: 'number',\n                  description: 'The number of milliseconds that a message is exclusively leased. After the timeout, the message becomes available for another attempt.'\n                }\n              },\n              required: []\n            },\n            type: {\n              type: 'string',\n              enum: [                'http_pull'\n              ]\n            }\n          },\n          required: []\n        }\n      ]\n    }\n  }\n}\n```",
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
  const { queue_id, ...body } = args as any;
  const response = await client.queues.consumers.get(queue_id, body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
