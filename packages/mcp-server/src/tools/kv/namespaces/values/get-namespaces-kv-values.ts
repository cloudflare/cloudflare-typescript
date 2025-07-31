// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'kv.namespaces.values',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}',
  operationId: 'workers-kv-namespace-read-key-value-pair',
};

export const tool: Tool = {
  name: 'get_namespaces_kv_values',
  description:
    'Returns the value associated with the given key in the given namespace. Use URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key name. If the KV-pair is set to expire at some point, the expiration time as measured in seconds since the UNIX epoch will be returned in the `expiration` response header.',
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
      key_name: {
        type: 'string',
        description:
          "A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid. Use percent-encoding to define key names as part of a URL.",
      },
    },
    required: ['account_id', 'namespace_id', 'key_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { key_name, ...body } = args as any;
  return asBinaryContentResult(await client.kv.namespaces.values.get(key_name, body));
};

export default { metadata, tool, handler };
