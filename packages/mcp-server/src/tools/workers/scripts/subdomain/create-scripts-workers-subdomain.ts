// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.subdomain',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/workers/scripts/{script_name}/subdomain',
  operationId: 'worker-script-post-subdomain',
};

export const tool: Tool = {
  name: 'create_scripts_workers_subdomain',
  description: 'Enable or disable the Worker on the workers.dev subdomain.',
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
      enabled: {
        type: 'boolean',
        description: 'Whether the Worker should be available on the workers.dev subdomain.',
      },
      previews_enabled: {
        type: 'boolean',
        description: "Whether the Worker's Preview URLs should be available on the workers.dev subdomain.",
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { script_name, ...body } = args as any;
  return asTextContentResult(await client.workers.scripts.subdomain.create(script_name, body));
};

export default { metadata, tool, handler };
