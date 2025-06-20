// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'kv.namespaces.values',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}',
  operationId: 'workers-kv-namespace-write-key-value-pair-with-metadata',
};

export const tool: Tool = {
  name: 'update_namespaces_kv_values',
  description:
    'Write a value identified by a key. Use URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key name. Body should be the value to be stored. If JSON metadata to be associated with the key/value pair is needed, use `multipart/form-data` content type for your PUT request (see dropdown below in `REQUEST BODY SCHEMA`). Existing values, expirations, and metadata will be overwritten. If neither `expiration` nor `expiration_ttl` is specified, the key-value pair will never expire. If both are set, `expiration_ttl` is used and `expiration` is ignored.',
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
      value: {
        type: 'string',
        description: 'A byte sequence to be stored, up to 25 MiB in length.',
      },
      expiration: {
        type: 'number',
        description: 'Expires the key at a certain time, measured in number of seconds since the UNIX epoch.',
      },
      expiration_ttl: {
        type: 'number',
        description: 'Expires the key after a number of seconds. Must be at least 60.',
      },
      metadata: {
        type: 'object',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { key_name, ...body } = args as any;
  return asTextContentResult(await client.kv.namespaces.values.update(key_name, body));
};

export default { metadata, tool, handler };
