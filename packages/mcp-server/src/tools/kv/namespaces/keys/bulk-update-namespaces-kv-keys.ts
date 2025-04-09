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
  name: 'bulk_update_namespaces_kv_keys',
  description:
    'Write multiple keys and values at once. Body should be an array of up to 10,000 key-value pairs to be stored, along with optional expiration information. Existing values and expirations will be overwritten. If neither `expiration` nor `expiration_ttl` is specified, the key-value pair will never expire. If both are set, `expiration_ttl` is used and `expiration` is ignored. The entire request size must be 100 megabytes or less.',
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
          type: 'object',
          properties: {
            base64: {
              type: 'boolean',
              description:
                "Whether or not the server should base64 decode the value before storing it. Useful for writing values that wouldn't otherwise be valid JSON strings, such as images.",
            },
            expiration: {
              type: 'number',
              description:
                'The time, measured in number of seconds since the UNIX epoch, at which the key should expire.',
            },
            expiration_ttl: {
              type: 'number',
              description:
                'The number of seconds for which the key should be visible before it expires. At least 60.',
            },
            key: {
              type: 'string',
              description:
                "A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid.",
            },
            metadata: {
              type: 'object',
              description: 'Arbitrary JSON that is associated with a key.',
            },
            value: {
              type: 'string',
              description: 'A UTF-8 encoded string to be stored, up to 25 MiB in length.',
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { namespace_id, ...body } = args;
  return client.kv.namespaces.keys.bulkUpdate(namespace_id, body);
};

export default { metadata, tool, handler };
