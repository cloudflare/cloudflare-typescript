// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'kv.namespaces',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk',
  operationId: 'workers-kv-namespace-write-multiple-key-value-pairs',
};

export const tool: Tool = {
  name: 'bulk_update_kv_namespaces',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nWrite multiple keys and values at once. Body should be an array of up to 10,000 key-value pairs to be stored, along with optional expiration information. Existing values and expirations will be overwritten. If neither `expiration` nor `expiration_ttl` is specified, the key-value pair will never expire. If both are set, `expiration_ttl` is used and `expiration` is ignored. The entire request size must be 100 megabytes or less.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        successful_key_count: {\n          type: 'number',\n          description: 'Number of keys successfully updated.'\n        },\n        unsuccessful_keys: {\n          type: 'array',\n          description: 'Name of the keys that failed to be fully updated. They should be retried.',\n          items: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
      body: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            key: {
              type: 'string',
              description:
                "A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid.",
            },
            value: {
              type: 'string',
              description: 'A UTF-8 encoded string to be stored, up to 25 MiB in length.',
            },
            base64: {
              type: 'boolean',
              description:
                "Indicates whether or not the server should base64 decode the value before storing it. Useful for writing values that wouldn't otherwise be valid JSON strings, such as images.",
            },
            expiration: {
              type: 'number',
              description:
                'Expires the key at a certain time, measured in number of seconds since the UNIX epoch.',
            },
            expiration_ttl: {
              type: 'number',
              description: 'Expires the key after a number of seconds. Must be at least 60.',
            },
            metadata: {
              type: 'object',
            },
          },
          required: ['key', 'value'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'namespace_id', 'body'],
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { namespace_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.kv.namespaces.bulkUpdate(namespace_id, body)),
  );
};

export default { metadata, tool, handler };
