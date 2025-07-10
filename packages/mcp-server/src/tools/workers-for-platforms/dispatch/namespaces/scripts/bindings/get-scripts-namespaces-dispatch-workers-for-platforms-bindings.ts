// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers_for_platforms.dispatch.namespaces.scripts.bindings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath:
    '/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/bindings',
  operationId: 'namespace-worker-get-script-bindings',
};

export const tool: Tool = {
  name: 'get_scripts_namespaces_dispatch_workers_for_platforms_bindings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch script bindings from a script uploaded to a Workers for Platforms namespace.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      dispatch_namespace: {
        type: 'string',
        description: 'Name of the Workers for Platforms dispatch namespace.',
      },
      script_name: {
        type: 'string',
        description: 'Name of the script, used in URLs and route configuration.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { script_name, ...body } = args as any;
  const response = await client.workersForPlatforms.dispatch.namespaces.scripts.bindings
    .get(script_name, body)
    .asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
