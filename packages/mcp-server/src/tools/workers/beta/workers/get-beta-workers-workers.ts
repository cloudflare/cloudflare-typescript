// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.beta.workers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workers/workers/{worker_id}',
  operationId: 'getWorker',
};

export const tool: Tool = {
  name: 'get_beta_workers_workers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet details about a specific Worker.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/worker',\n  $defs: {\n    worker: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Immutable ID of the Worker.'\n        },\n        created_on: {\n          type: 'string',\n          description: 'When the Worker was created.',\n          format: 'date-time'\n        },\n        logpush: {\n          type: 'boolean',\n          description: 'Whether logpush is enabled for the Worker.'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the Worker.'\n        },\n        observability: {\n          type: 'object',\n          description: 'Observability settings for the Worker.',\n          properties: {\n            enabled: {\n              type: 'boolean',\n              description: 'Whether observability is enabled for the Worker.'\n            },\n            head_sampling_rate: {\n              type: 'number',\n              description: 'The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).'\n            },\n            logs: {\n              type: 'object',\n              description: 'Log settings for the Worker.',\n              properties: {\n                enabled: {\n                  type: 'boolean',\n                  description: 'Whether logs are enabled for the Worker.'\n                },\n                head_sampling_rate: {\n                  type: 'number',\n                  description: 'The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).'\n                },\n                invocation_logs: {\n                  type: 'boolean',\n                  description: 'Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.'\n                }\n              }\n            }\n          }\n        },\n        references: {\n          type: 'object',\n          description: 'Other resources that reference the Worker and depend on it existing.',\n          properties: {\n            dispatch_namespace_outbounds: {\n              type: 'array',\n              description: 'Other Workers that reference the Worker as an outbound for a dispatch namespace.',\n              items: {\n                type: 'object',\n                properties: {\n                  namespace_id: {\n                    type: 'string',\n                    description: 'ID of the dispatch namespace.'\n                  },\n                  namespace_name: {\n                    type: 'string',\n                    description: 'Name of the dispatch namespace.'\n                  },\n                  worker_id: {\n                    type: 'string',\n                    description: 'ID of the Worker using the dispatch namespace.'\n                  },\n                  worker_name: {\n                    type: 'string',\n                    description: 'Name of the Worker using the dispatch namespace.'\n                  }\n                },\n                required: [                  'namespace_id',\n                  'namespace_name',\n                  'worker_id',\n                  'worker_name'\n                ]\n              }\n            },\n            domains: {\n              type: 'array',\n              description: 'Custom domains connected to the Worker.',\n              items: {\n                type: 'object',\n                properties: {\n                  id: {\n                    type: 'string',\n                    description: 'ID of the custom domain.'\n                  },\n                  certificate_id: {\n                    type: 'string',\n                    description: 'ID of the TLS certificate issued for the custom domain.'\n                  },\n                  hostname: {\n                    type: 'string',\n                    description: 'Full hostname of the custom domain, including the zone name.'\n                  },\n                  zone_id: {\n                    type: 'string',\n                    description: 'ID of the zone.'\n                  },\n                  zone_name: {\n                    type: 'string',\n                    description: 'Name of the zone.'\n                  }\n                },\n                required: [                  'id',\n                  'certificate_id',\n                  'hostname',\n                  'zone_id',\n                  'zone_name'\n                ]\n              }\n            },\n            durable_objects: {\n              type: 'array',\n              description: 'Other Workers that reference Durable Object classes implemented by the Worker.',\n              items: {\n                type: 'object',\n                properties: {\n                  namespace_id: {\n                    type: 'string',\n                    description: 'ID of the Durable Object namespace being used.'\n                  },\n                  namespace_name: {\n                    type: 'string',\n                    description: 'Name of the Durable Object namespace being used.'\n                  },\n                  worker_id: {\n                    type: 'string',\n                    description: 'ID of the Worker using the Durable Object implementation.'\n                  },\n                  worker_name: {\n                    type: 'string',\n                    description: 'Name of the Worker using the Durable Object implementation.'\n                  }\n                },\n                required: [                  'namespace_id',\n                  'namespace_name',\n                  'worker_id',\n                  'worker_name'\n                ]\n              }\n            },\n            queues: {\n              type: 'array',\n              description: 'Queues that send messages to the Worker.',\n              items: {\n                type: 'object',\n                properties: {\n                  queue_consumer_id: {\n                    type: 'string',\n                    description: 'ID of the queue consumer configuration.'\n                  },\n                  queue_id: {\n                    type: 'string',\n                    description: 'ID of the queue.'\n                  },\n                  queue_name: {\n                    type: 'string',\n                    description: 'Name of the queue.'\n                  }\n                },\n                required: [                  'queue_consumer_id',\n                  'queue_id',\n                  'queue_name'\n                ]\n              }\n            },\n            workers: {\n              type: 'array',\n              description: 'Other Workers that reference the Worker using [service bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/).',\n              items: {\n                type: 'object',\n                properties: {\n                  id: {\n                    type: 'string',\n                    description: 'ID of the referencing Worker.'\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'Name of the referencing Worker.'\n                  }\n                },\n                required: [                  'id',\n                  'name'\n                ]\n              }\n            }\n          },\n          required: [            'dispatch_namespace_outbounds',\n            'domains',\n            'durable_objects',\n            'queues',\n            'workers'\n          ]\n        },\n        subdomain: {\n          type: 'object',\n          description: 'Subdomain settings for the Worker.',\n          properties: {\n            enabled: {\n              type: 'boolean',\n              description: 'Whether the *.workers.dev subdomain is enabled for the Worker.'\n            },\n            previews_enabled: {\n              type: 'boolean',\n              description: 'Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.'\n            }\n          }\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags associated with the Worker.',\n          items: {\n            type: 'string'\n          }\n        },\n        tail_consumers: {\n          type: 'array',\n          description: 'Other Workers that should consume logs from the Worker.',\n          items: {\n            type: 'object',\n            properties: {\n              name: {\n                type: 'string',\n                description: 'Name of the consumer Worker.'\n              }\n            },\n            required: [              'name'\n            ]\n          }\n        },\n        updated_on: {\n          type: 'string',\n          description: 'When the Worker was most recently updated.',\n          format: 'date-time'\n        }\n      },\n      required: [        'id',\n        'created_on',\n        'logpush',\n        'name',\n        'observability',\n        'references',\n        'subdomain',\n        'tags',\n        'tail_consumers',\n        'updated_on'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      worker_id: {
        type: 'string',
        description: 'Identifier for the Worker, which can be ID or name.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'worker_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { worker_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.workers.beta.workers.get(worker_id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
