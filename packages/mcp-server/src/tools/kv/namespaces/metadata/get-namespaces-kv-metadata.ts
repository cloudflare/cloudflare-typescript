// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'kv.namespaces.metadata',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_namespaces_kv_metadata',
  description:
    'Returns the metadata associated with the given key in the given namespace. Use URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key name.',
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
      key_name: {
        type: 'string',
        description:
          "A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid. Use percent-encoding to define key names as part of a URL.",
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { key_name, ...body } = args;
  return client.kv.namespaces.metadata.get(key_name, body);
};

export default { metadata, tool, handler };
