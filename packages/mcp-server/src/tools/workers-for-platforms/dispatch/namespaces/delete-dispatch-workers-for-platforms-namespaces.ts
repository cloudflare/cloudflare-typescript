// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers_for_platforms.dispatch.namespaces',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}',
  operationId: 'namespace-worker-delete-namespace',
};

export const tool: Tool = {
  name: 'delete_dispatch_workers_for_platforms_namespaces',
  description: 'Delete a Workers for Platforms namespace.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { dispatch_namespace, ...body } = args as any;
  return client.workersForPlatforms.dispatch.namespaces.delete(dispatch_namespace, body);
};

export default { metadata, tool, handler };
