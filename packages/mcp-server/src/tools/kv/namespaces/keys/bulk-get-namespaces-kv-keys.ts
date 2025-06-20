// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'kv.namespaces.keys',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk/get',
  operationId: 'workers-kv-namespace-get-multiple-key-value-pairs',
};

export const tool: Tool = {
  name: 'bulk_get_namespaces_kv_keys',
  description:
    'Retrieve up to 100 KV pairs from the namespace. Keys must contain text-based values. JSON values can optionally be parsed instead of being returned as a string value. Metadata can be included if `withMetadata` is true.',
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
      keys: {
        type: 'array',
        description: 'Array of keys to retrieve (maximum of 100).',
        items: {
          type: 'string',
          description:
            "A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid.",
        },
      },
      type: {
        type: 'string',
        description: 'Whether to parse JSON values in the response.',
        enum: ['text', 'json'],
      },
      withMetadata: {
        type: 'boolean',
        description: 'Whether to include metadata in the response.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { namespace_id, ...body } = args as any;
  return asTextContentResult(await client.kv.namespaces.keys.bulkGet(namespace_id, body));
};

export default { metadata, tool, handler };
