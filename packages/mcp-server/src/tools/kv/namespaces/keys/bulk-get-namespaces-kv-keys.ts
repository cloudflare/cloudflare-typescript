// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'kv.namespaces.keys',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'bulk_get_namespaces_kv_keys',
  description:
    'Get multiple KV pairs from the namespace. Body should contain keys to retrieve at most 100. Keys must contain text-based values. If value is json, it can be requested to return in JSON, instead of string. Metadata can be return if withMetadata is true.',
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
      keys: {
        type: 'array',
        description: 'Array of keys to retrieve (maximum 100)',
        items: {
          type: 'string',
          description:
            "A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid.",
        },
      },
      type: {
        type: 'string',
        description: 'Whether to parse JSON values in the response',
        enum: ['text', 'json'],
      },
      withMetadata: {
        type: 'boolean',
        description: 'Whether to include metadata in the response',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { namespace_id, ...body } = args;
  return client.kv.namespaces.keys.bulkGet(namespace_id, body);
};

export default { metadata, tool, handler };
