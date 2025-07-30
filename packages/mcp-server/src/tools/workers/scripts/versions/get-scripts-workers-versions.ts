// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers.scripts.versions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workers/scripts/{script_name}/versions/{version_id}',
  operationId: 'worker-versions-get-version-detail',
};

export const tool: Tool = {
  name: 'get_scripts_workers_versions',
  description: 'Get Version Detail',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      script_name: {
        type: 'string',
        description: 'Name of the script.',
      },
      version_id: {
        type: 'string',
      },
    },
    required: ['account_id', 'script_name', 'version_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { version_id, ...body } = args as any;
  return asTextContentResult(await client.workers.scripts.versions.get(version_id, body));
};

export default { metadata, tool, handler };
