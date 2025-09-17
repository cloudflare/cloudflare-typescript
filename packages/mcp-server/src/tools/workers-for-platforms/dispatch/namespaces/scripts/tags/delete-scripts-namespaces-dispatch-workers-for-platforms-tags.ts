// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers_for_platforms.dispatch.namespaces.scripts.tags',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath:
    '/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags/{tag}',
  operationId: 'namespace-worker-delete-script-tag',
};

export const tool: Tool = {
  name: 'delete_scripts_namespaces_dispatch_workers_for_platforms_tags',
  description: 'Delete script tag for a script uploaded to a Workers for Platforms namespace.',
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
      tag: {
        type: 'string',
      },
    },
    required: ['account_id', 'dispatch_namespace', 'script_name', 'tag'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { tag, ...body } = args as any;
  return asTextContentResult(
    (await client.workersForPlatforms.dispatch.namespaces.scripts.tags.delete(tag, body)) as object,
  );
};

export default { metadata, tool, handler };
