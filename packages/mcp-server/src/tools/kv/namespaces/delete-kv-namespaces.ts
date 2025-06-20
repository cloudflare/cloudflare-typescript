// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'kv.namespaces',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/storage/kv/namespaces/{namespace_id}',
  operationId: 'workers-kv-namespace-remove-a-namespace',
};

export const tool: Tool = {
  name: 'delete_kv_namespaces',
  description: 'Deletes the namespace corresponding to the given ID.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      namespace_id: {
        type: 'string',
        description: 'Namespace identifier tag.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { namespace_id, ...body } = args as any;
  return asTextContentResult(await client.kv.namespaces.delete(namespace_id, body));
};

export default { metadata, tool, handler };
