// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'vectorize.indexes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/vectorize/v2/indexes/{index_name}/query',
  operationId: 'vectorize-query-vector',
};

export const tool: Tool = {
  name: 'query_vectorize_indexes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFinds vectors closest to a given vector in an index.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'Specifies the count of vectors returned by the search'\n        },\n        matches: {\n          type: 'array',\n          description: 'Array of vectors matched by the search',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Identifier for a Vector'\n              },\n              metadata: {\n                type: 'object'\n              },\n              namespace: {\n                type: 'string'\n              },\n              score: {\n                type: 'number',\n                description: 'The score of the vector according to the index\\'s distance metric'\n              },\n              values: {\n                type: 'array',\n                items: {\n                  type: 'number'\n                }\n              }\n            }\n          }\n        }\n      }\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      index_name: {
        type: 'string',
      },
      vector: {
        type: 'array',
        description: 'The search vector that will be used to find the nearest neighbors.',
        items: {
          type: 'number',
        },
      },
      filter: {
        type: 'object',
        description: 'A metadata filter expression used to limit nearest neighbor results.',
      },
      returnMetadata: {
        type: 'string',
        description:
          'Whether to return no metadata, indexed metadata or all metadata associated with the closest vectors.',
        enum: ['none', 'indexed', 'all'],
      },
      returnValues: {
        type: 'boolean',
        description: 'Whether to return the values associated with the closest vectors.',
      },
      topK: {
        type: 'number',
        description: 'The number of nearest neighbors to find.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'index_name', 'vector'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { index_name, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.vectorize.indexes.query(index_name, body)));
};

export default { metadata, tool, handler };
