// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers_for_platforms.dispatch.namespaces.scripts.settings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath:
    '/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings',
  operationId: 'namespace-worker-get-script-settings',
};

export const tool: Tool = {
  name: 'get_scripts_namespaces_dispatch_workers_for_platforms_settings',
  description: 'Get script settings from a script uploaded to a Workers for Platforms namespace.',
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
    required: ['account_id', 'dispatch_namespace', 'script_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { script_name, ...body } = args as any;
  return asTextContentResult(
    await client.workersForPlatforms.dispatch.namespaces.scripts.settings.get(script_name, body),
  );
};

export default { metadata, tool, handler };
