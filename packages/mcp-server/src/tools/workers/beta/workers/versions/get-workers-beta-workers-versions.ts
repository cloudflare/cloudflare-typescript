// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.beta.workers.versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workers/workers/{worker_id}/versions/{version_id}',
  operationId: 'getWorkerVersion',
};

export const tool: Tool = {
  name: 'get_workers_beta_workers_versions',
  description: 'Get details about a specific version.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      worker_id: {
        type: 'string',
        description: 'Identifier.',
      },
      version_id: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'string',
            enum: ['latest'],
          },
        ],
      },
      include: {
        type: 'string',
        enum: ['modules'],
      },
    },
    required: ['account_id', 'worker_id', 'version_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { version_id, ...body } = args as any;
  return asTextContentResult(await client.workers.beta.workers.versions.get(version_id, body));
};

export default { metadata, tool, handler };
