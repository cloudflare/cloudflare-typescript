// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.secrets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workers/scripts/{script_name}/secrets/{secret_name}',
  operationId: 'worker-get-script-secret',
};

export const tool: Tool = {
  name: 'get_scripts_workers_secrets',
  description: 'Get a given secret binding (value omitted) on a script.',
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
      secret_name: {
        type: 'string',
        description: 'A JavaScript variable name for the secret binding.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { secret_name, ...body } = args as any;
  return asTextContentResult(await client.workers.scripts.secrets.get(secret_name, body));
};

export default { metadata, tool, handler };
