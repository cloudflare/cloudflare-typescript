// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.beta.workers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workers/workers',
  operationId: 'listWorkers',
};

export const tool: Tool = {
  name: 'list_beta_workers_workers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all Workers for an account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          message: {\n            type: 'string'\n          },\n          documentation_url: {\n            type: 'string'\n          },\n          source: {\n            type: 'object',\n            properties: {\n              pointer: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        required: [          'code',\n          'message'\n        ]\n      }\n    },\n    result: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/worker'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result_info: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'number',\n          description: 'Total number of results for the requested service.'\n        },\n        page: {\n          type: 'number',\n          description: 'Current page within paginated list of results.'\n        },\n        per_page: {\n          type: 'number',\n          description: 'Number of results per page of results.'\n        },\n        total_count: {\n          type: 'number',\n          description: 'Total results available without any search parameters.'\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    worker: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier.'\n        },\n        created_on: {\n          type: 'string',\n          description: 'When the Worker was created.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the Worker.'\n        },\n        updated_on: {\n          type: 'string',\n          description: 'When the Worker was most recently updated.',\n          format: 'date-time'\n        },\n        logpush: {\n          type: 'boolean',\n          description: 'Whether logpush is enabled for the Worker.'\n        },\n        observability: {\n          type: 'object',\n          description: 'Observability settings for the Worker.',\n          properties: {\n            enabled: {\n              type: 'boolean',\n              description: 'Whether observability is enabled for the Worker.'\n            },\n            head_sampling_rate: {\n              type: 'number',\n              description: 'The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).'\n            },\n            logs: {\n              type: 'object',\n              description: 'Log settings for the Worker.',\n              properties: {\n                enabled: {\n                  type: 'boolean',\n                  description: 'Whether logs are enabled for the Worker.'\n                },\n                head_sampling_rate: {\n                  type: 'number',\n                  description: 'The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).'\n                },\n                invocation_logs: {\n                  type: 'boolean',\n                  description: 'Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.'\n                }\n              }\n            }\n          }\n        },\n        subdomain: {\n          type: 'object',\n          description: 'Subdomain settings for the Worker.',\n          properties: {\n            enabled: {\n              type: 'boolean',\n              description: 'Whether the *.workers.dev subdomain is enabled for the Worker.'\n            },\n            previews_enabled: {\n              type: 'boolean',\n              description: 'Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.'\n            }\n          }\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags associated with the Worker.',\n          items: {\n            type: 'string'\n          }\n        },\n        tail_consumers: {\n          type: 'array',\n          description: 'Other Workers that should consume logs from the Worker.',\n          items: {\n            type: 'object',\n            properties: {\n              name: {\n                type: 'string',\n                description: 'Name of the consumer Worker.'\n              }\n            },\n            required: [              'name'\n            ]\n          }\n        }\n      },\n      required: [        'id',\n        'created_on',\n        'name',\n        'updated_on'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      page: {
        type: 'integer',
        description: 'Current page.',
      },
      per_page: {
        type: 'integer',
        description: 'Items per-page.',
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
  const response = await client.workers.beta.workers.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
