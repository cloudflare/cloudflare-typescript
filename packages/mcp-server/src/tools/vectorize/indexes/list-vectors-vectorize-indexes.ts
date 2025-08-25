// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'vectorize.indexes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/vectorize/v2/indexes/{index_name}/list',
  operationId: 'vectorize-list-vectors',
};

export const tool: Tool = {
  name: 'list_vectors_vectorize_indexes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a paginated list of vector identifiers from the specified index.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'Number of vectors returned in this response'\n        },\n        isTruncated: {\n          type: 'boolean',\n          description: 'Whether there are more vectors available beyond this response'\n        },\n        totalCount: {\n          type: 'integer',\n          description: 'Total number of vectors in the index'\n        },\n        vectors: {\n          type: 'array',\n          description: 'Array of vector items',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Identifier for a Vector'\n              }\n            },\n            required: [              'id'\n            ]\n          }\n        },\n        cursorExpirationTimestamp: {\n          type: 'string',\n          description: 'When the cursor expires as an ISO8601 string',\n          format: 'date-time'\n        },\n        nextCursor: {\n          type: 'string',\n          description: 'Cursor for the next page of results'\n        }\n      },\n      required: [        'count',\n        'isTruncated',\n        'totalCount',\n        'vectors'\n      ]\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          }\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
      count: {
        type: 'integer',
        description: 'Maximum number of vectors to return',
      },
      cursor: {
        type: 'string',
        description: 'Cursor for pagination to get the next page of results',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'index_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { index_name, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.vectorize.indexes.listVectors(index_name, body)),
  );
};

export default { metadata, tool, handler };
