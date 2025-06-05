// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'kv.namespaces',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/storage/kv/namespaces/{namespace_id}',
  operationId: 'workers-kv-namespace-rename-a-namespace',
};

export const tool: Tool = {
  name: 'update_kv_namespaces',
  description: "Modifies a namespace's title.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      namespace_id: {
        type: 'string',
        description: 'Namespace identifier tag.',
      },
      title: {
        type: 'string',
        description: 'A human-readable string name for a Namespace.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { namespace_id, ...body } = args as any;
  return asTextContentResult(await client.kv.namespaces.update(namespace_id, body));
};

export default { metadata, tool, handler };
