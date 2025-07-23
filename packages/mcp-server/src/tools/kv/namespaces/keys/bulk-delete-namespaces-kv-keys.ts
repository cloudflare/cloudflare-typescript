// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'kv.namespaces.keys',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk/delete',
  operationId: 'workers-kv-namespace-delete-multiple-key-value-pairs',
};

export const tool: Tool = {
  name: 'bulk_delete_namespaces_kv_keys',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRemove multiple KV pairs from the namespace. Body should be an array of up to 10,000 keys to be removed.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful.',\n      enum: [        true\n      ]\n    },\n    result: {\n      type: 'object',\n      properties: {\n        successful_key_count: {\n          type: 'number',\n          description: 'Number of keys successfully updated.'\n        },\n        unsuccessful_keys: {\n          type: 'array',\n          description: 'Name of the keys that failed to be fully updated. They should be retried.',\n          items: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
          type: 'string',
          description:
            "A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid.",
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
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { namespace_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.kv.namespaces.keys.bulkDelete(namespace_id, body)),
  );
};

export default { metadata, tool, handler };
