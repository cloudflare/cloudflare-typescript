// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers_for_platforms.dispatch.namespaces.scripts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}',
  operationId: 'namespace-worker-script-worker-details',
};

export const tool: Tool = {
  name: 'get_namespaces_dispatch_workers_for_platforms_scripts',
  description: 'Fetch information about a script uploaded to a Workers for Platforms namespace.',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { script_name, ...body } = args as any;
  return client.workersForPlatforms.dispatch.namespaces.scripts.get(script_name, body);
};

export default { metadata, tool, handler };
