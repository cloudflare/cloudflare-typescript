// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/workers/scripts/{script_name}',
  operationId: 'worker-script-delete-worker',
};

export const tool: Tool = {
  name: 'delete_workers_scripts',
  description: 'Delete your worker. This call has no response body on a successful delete.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      script_name: {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
      },
      force: {
        type: 'boolean',
        description:
          'If set to true, delete will not be stopped by associated service binding, durable object, or other binding. Any of these associated bindings/durable objects will be deleted along with the script.',
      },
    },
    required: ['account_id', 'script_name'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { script_name, ...body } = args as any;
  return asTextContentResult((await client.workers.scripts.delete(script_name, body)) as object);
};

export default { metadata, tool, handler };
