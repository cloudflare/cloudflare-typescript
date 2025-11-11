// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'queues.subscriptions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/event_subscriptions/subscriptions',
  operationId: 'subscriptions-list',
};

export const tool: Tool = {
  name: 'list_queues_subscriptions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a paginated list of event subscriptions with optional sorting and filtering\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Unique identifier for the subscription'\n          },\n          created_at: {\n            type: 'string',\n            description: 'When the subscription was created',\n            format: 'date-time'\n          },\n          destination: {\n            type: 'object',\n            description: 'Destination configuration for the subscription',\n            properties: {\n              queue_id: {\n                type: 'string',\n                description: 'ID of the target queue'\n              },\n              type: {\n                type: 'string',\n                description: 'Type of destination',\n                enum: [                  'queues.queue'\n                ]\n              }\n            },\n            required: [              'queue_id',\n              'type'\n            ]\n          },\n          enabled: {\n            type: 'boolean',\n            description: 'Whether the subscription is active'\n          },\n          events: {\n            type: 'array',\n            description: 'List of event types this subscription handles',\n            items: {\n              type: 'string'\n            }\n          },\n          modified_at: {\n            type: 'string',\n            description: 'When the subscription was last modified',\n            format: 'date-time'\n          },\n          name: {\n            type: 'string',\n            description: 'Name of the subscription'\n          },\n          source: {\n            anyOf: [              {\n                type: 'object',\n                properties: {\n                  type: {\n                    type: 'string',\n                    description: 'Type of source',\n                    enum: [                      'images'\n                    ]\n                  }\n                }\n              },\n              {\n                type: 'object',\n                properties: {\n                  type: {\n                    type: 'string',\n                    description: 'Type of source',\n                    enum: [                      'kv'\n                    ]\n                  }\n                }\n              },\n              {\n                type: 'object',\n                properties: {\n                  type: {\n                    type: 'string',\n                    description: 'Type of source',\n                    enum: [                      'r2'\n                    ]\n                  }\n                }\n              },\n              {\n                type: 'object',\n                properties: {\n                  type: {\n                    type: 'string',\n                    description: 'Type of source',\n                    enum: [                      'superSlurper'\n                    ]\n                  }\n                }\n              },\n              {\n                type: 'object',\n                properties: {\n                  type: {\n                    type: 'string',\n                    description: 'Type of source',\n                    enum: [                      'vectorize'\n                    ]\n                  }\n                }\n              },\n              {\n                type: 'object',\n                properties: {\n                  model_name: {\n                    type: 'string',\n                    description: 'Name of the Workers AI model'\n                  },\n                  type: {\n                    type: 'string',\n                    description: 'Type of source',\n                    enum: [                      'workersAi.model'\n                    ]\n                  }\n                }\n              },\n              {\n                type: 'object',\n                properties: {\n                  type: {\n                    type: 'string',\n                    description: 'Type of source',\n                    enum: [                      'workersBuilds.worker'\n                    ]\n                  },\n                  worker_name: {\n                    type: 'string',\n                    description: 'Name of the worker'\n                  }\n                }\n              },\n              {\n                type: 'object',\n                properties: {\n                  type: {\n                    type: 'string',\n                    description: 'Type of source',\n                    enum: [                      'workflows.workflow'\n                    ]\n                  },\n                  workflow_name: {\n                    type: 'string',\n                    description: 'Name of the workflow'\n                  }\n                }\n              }\n            ],\n            description: 'Source configuration for the subscription'\n          }\n        },\n        required: [          'id',\n          'created_at',\n          'destination',\n          'enabled',\n          'events',\n          'modified_at',\n          'name',\n          'source'\n        ]\n      }\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'Number of items in current page'\n        },\n        page: {\n          type: 'integer',\n          description: 'Current page number'\n        },\n        per_page: {\n          type: 'integer',\n          description: 'Items per page'\n        },\n        total_count: {\n          type: 'integer',\n          description: 'Total number of items'\n        },\n        total_pages: {\n          type: 'integer',\n          description: 'Total number of pages'\n        }\n      },\n      required: [        'count',\n        'page',\n        'per_page',\n        'total_count',\n        'total_pages'\n      ]\n    },\n    success: {\n      type: 'string',\n      description: 'Indicates if the API call was successful or not.',\n      enum: [        true\n      ]\n    }\n  },\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'A Resource identifier.',
      },
      direction: {
        type: 'string',
        description: 'Sort direction',
        enum: ['asc', 'desc'],
      },
      order: {
        type: 'string',
        description: 'Field to sort by',
        enum: ['created_at', 'name', 'enabled', 'source'],
      },
      page: {
        type: 'integer',
        description: 'Page number for pagination',
      },
      per_page: {
        type: 'integer',
        description: 'Number of items per page',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.queues.subscriptions.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
