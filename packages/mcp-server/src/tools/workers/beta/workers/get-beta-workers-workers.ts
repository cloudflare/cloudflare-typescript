// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

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
  description: 'Get details about a specific Worker.',
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
    },
    required: ['account_id', 'worker_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { worker_id, ...body } = args as any;
  return asTextContentResult(await client.workers.beta.workers.get(worker_id, body));
};

export default { metadata, tool, handler };
