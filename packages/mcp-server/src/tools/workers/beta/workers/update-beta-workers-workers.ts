// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.beta.workers',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/workers/workers/{worker_id}',
  operationId: 'updateWorker',
};

export const tool: Tool = {
  name: 'update_beta_workers_workers',
  description:
    'Perform a complete replacement of a Worker, where omitted properties are set to their default values. This is the exact same as the Create Worker endpoint, but operates on an existing Worker. To perform a partial update instead, use the Edit Worker endpoint.',
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
    },
    required: ['account_id', 'worker_id', 'name'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { worker_id, ...body } = args as any;
  return asTextContentResult(await client.workers.beta.workers.update(worker_id, body));
};

export default { metadata, tool, handler };
