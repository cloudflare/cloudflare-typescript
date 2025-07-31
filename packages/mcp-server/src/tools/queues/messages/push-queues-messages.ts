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
  httpPath: '/accounts/{account_id}/queues/{queue_id}/messages',
  operationId: 'queues-push-message',
};

export const tool: Tool = {
  name: 'push_queues_messages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPush a message to a Queue\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Indicates if the API call was successful or not.',\n      enum: [        true\n      ]\n    }\n  },\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
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
          body: {
            type: 'string',
          },
          content_type: {
            type: 'string',
            enum: ['text'],
          },
          delay_seconds: {
            type: 'number',
            description: 'The number of seconds to wait for attempting to deliver this message to consumers',
          },
        },
        required: ['account_id', 'queue_id'],
      },
      {
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
          body: {
            type: 'object',
          },
          content_type: {
            type: 'string',
            enum: ['json'],
          },
          delay_seconds: {
            type: 'number',
            description: 'The number of seconds to wait for attempting to deliver this message to consumers',
          },
        },
        required: ['account_id', 'queue_id'],
      },
    ],
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { queue_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.queues.messages.push(queue_id, body)));
};

export default { metadata, tool, handler };
