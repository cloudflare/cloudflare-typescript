// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'kv.namespaces',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk/get',
  operationId: 'workers-kv-namespace-get-multiple-key-value-pairs',
};

export const tool: Tool = {
  name: 'bulk_get_kv_namespaces',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve up to 100 KV pairs from the namespace. Keys must contain text-based values. JSON values can optionally be parsed instead of being returned as a string value. Metadata can be included if `withMetadata` is true.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      anyOf: [        {\n          type: 'object',\n          properties: {\n            values: {\n              type: 'object',\n              description: 'Requested keys are paired with their values in an object.'\n            }\n          },\n          required: []\n        },\n        {\n          type: 'object',\n          properties: {\n            values: {\n              type: 'object',\n              description: 'Requested keys are paired with their values and metadata in an object.'\n            }\n          },\n          required: []\n        }\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { namespace_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.kv.namespaces.bulkGet(namespace_id, body)));
};

export default { metadata, tool, handler };
