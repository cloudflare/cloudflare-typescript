// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.beta.workers.versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workers/workers/{worker_id}/versions',
  operationId: 'listWorkerVersions',
};

export const tool: Tool = {
  name: 'list_workers_beta_workers_versions',
  description: 'List all versions for a Worker.',
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
      page: {
        type: 'integer',
        description: 'Current page.',
      },
      per_page: {
        type: 'integer',
        description: 'Items per-page.',
      },
    },
    required: ['account_id', 'worker_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { worker_id, ...body } = args as any;
  const response = await client.workers.beta.workers.versions.list(worker_id, body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
