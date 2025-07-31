// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'workers_for_platforms.dispatch.namespaces.scripts.secrets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath:
    '/accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets/{secret_name}',
  operationId: 'namespace-worker-delete-script-secret',
};

export const tool: Tool = {
  name: 'delete_scripts_namespaces_dispatch_workers_for_platforms_secrets',
  description: 'Remove a secret from a script uploaded to a Workers for Platforms namespace.',
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
      secret_name: {
        type: 'string',
        description: 'A JavaScript variable name for the secret binding.',
      },
    },
    required: ['account_id', 'dispatch_namespace', 'script_name', 'secret_name'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { secret_name, ...body } = args as any;
  return asTextContentResult(
    (await client.workersForPlatforms.dispatch.namespaces.scripts.secrets.delete(
      secret_name,
      body,
    )) as object,
  );
};

export default { metadata, tool, handler };
