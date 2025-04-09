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
  name: 'bulk_delete_namespaces_kv_keys',
  description:
    'Remove multiple KV pairs from the namespace. Body should be an array of up to 10,000 keys to be removed.',
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
      body: {
        type: 'array',
        items: {
          type: 'string',
          description:
            "A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid.",
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { namespace_id, ...body } = args;
  return client.kv.namespaces.keys.bulkDelete(namespace_id, body);
};

export default { metadata, tool, handler };
