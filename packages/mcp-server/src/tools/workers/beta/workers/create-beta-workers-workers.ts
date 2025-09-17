// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.beta.workers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/workers/workers',
  operationId: 'createWorker',
};

export const tool: Tool = {
  name: 'create_beta_workers_workers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new Worker.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      $ref: '#/$defs/worker'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    worker: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Immutable ID of the Worker.'\n        },\n        created_on: {\n          type: 'string',\n          description: 'When the Worker was created.',\n          format: 'date-time'\n        },\n        logpush: {\n          type: 'boolean',\n          description: 'Whether logpush is enabled for the Worker.'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the Worker.'\n        },\n        observability: {\n          type: 'object',\n          description: 'Observability settings for the Worker.',\n          properties: {\n            enabled: {\n              type: 'boolean',\n              description: 'Whether observability is enabled for the Worker.'\n            },\n            head_sampling_rate: {\n              type: 'number',\n              description: 'The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).'\n            },\n            logs: {\n              type: 'object',\n              description: 'Log settings for the Worker.',\n              properties: {\n                enabled: {\n                  type: 'boolean',\n                  description: 'Whether logs are enabled for the Worker.'\n                },\n                head_sampling_rate: {\n                  type: 'number',\n                  description: 'The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).'\n                },\n                invocation_logs: {\n                  type: 'boolean',\n                  description: 'Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.'\n                }\n              }\n            }\n          }\n        },\n        subdomain: {\n          type: 'object',\n          description: 'Subdomain settings for the Worker.',\n          properties: {\n            enabled: {\n              type: 'boolean',\n              description: 'Whether the *.workers.dev subdomain is enabled for the Worker.'\n            },\n            previews_enabled: {\n              type: 'boolean',\n              description: 'Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.'\n            }\n          }\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags associated with the Worker.',\n          items: {\n            type: 'string'\n          }\n        },\n        tail_consumers: {\n          type: 'array',\n          description: 'Other Workers that should consume logs from the Worker.',\n          items: {\n            type: 'object',\n            properties: {\n              name: {\n                type: 'string',\n                description: 'Name of the consumer Worker.'\n              }\n            },\n            required: [              'name'\n            ]\n          }\n        },\n        updated_on: {\n          type: 'string',\n          description: 'When the Worker was most recently updated.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_on',\n        'logpush',\n        'name',\n        'observability',\n        'subdomain',\n        'tags',\n        'tail_consumers',\n        'updated_on'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      name: {
        type: 'string',
        description: 'Name of the Worker.',
      },
      logpush: {
        type: 'boolean',
        description: 'Whether logpush is enabled for the Worker.',
      },
      observability: {
        type: 'object',
        description: 'Observability settings for the Worker.',
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Whether observability is enabled for the Worker.',
          },
          head_sampling_rate: {
            type: 'number',
            description: 'The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).',
          },
          logs: {
            type: 'object',
            description: 'Log settings for the Worker.',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'Whether logs are enabled for the Worker.',
              },
              head_sampling_rate: {
                type: 'number',
                description: 'The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).',
              },
              invocation_logs: {
                type: 'boolean',
                description:
                  'Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.',
              },
            },
          },
        },
      },
      subdomain: {
        type: 'object',
        description: 'Subdomain settings for the Worker.',
        properties: {
          enabled: {
            type: 'boolean',
            description: 'Whether the *.workers.dev subdomain is enabled for the Worker.',
          },
          previews_enabled: {
            type: 'boolean',
            description:
              'Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.',
          },
        },
      },
      tags: {
        type: 'array',
        description: 'Tags associated with the Worker.',
        items: {
          type: 'string',
        },
      },
      tail_consumers: {
        type: 'array',
        description: 'Other Workers that should consume logs from the Worker.',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Name of the consumer Worker.',
            },
          },
          required: ['name'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'name'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.workers.beta.workers.create(body)));
};

export default { metadata, tool, handler };
