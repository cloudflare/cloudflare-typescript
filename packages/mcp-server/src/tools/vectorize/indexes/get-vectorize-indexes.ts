// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'cloudflare-mcp/filtering';
import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'vectorize.indexes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/vectorize/v2/indexes/{index_name}',
  operationId: 'vectorize-get-vectorize-index',
};

export const tool: Tool = {
  name: 'get_vectorize_indexes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the specified Vectorize Index.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    messages: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/response_info'\n      }\n    },\n    result: {\n      $ref: '#/$defs/create_index'\n    },\n    success: {\n      type: 'string',\n      description: 'Whether the API call was successful',\n      enum: [        true\n      ]\n    }\n  },\n  required: [    'errors',\n    'messages',\n    'result',\n    'success'\n  ],\n  $defs: {\n    response_info: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'integer'\n        },\n        message: {\n          type: 'string'\n        },\n        documentation_url: {\n          type: 'string'\n        },\n        source: {\n          type: 'object',\n          properties: {\n            pointer: {\n              type: 'string'\n            }\n          },\n          required: []\n        }\n      },\n      required: [        'code',\n        'message'\n      ]\n    },\n    create_index: {\n      type: 'object',\n      properties: {\n        config: {\n          $ref: '#/$defs/index_dimension_configuration'\n        },\n        created_on: {\n          type: 'string',\n          description: 'Specifies the timestamp the resource was created as an ISO8601 string.',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Specifies the description of the index.'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'Specifies the timestamp the resource was modified as an ISO8601 string.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    index_dimension_configuration: {\n      type: 'object',\n      properties: {\n        dimensions: {\n          type: 'integer',\n          description: 'Specifies the number of dimensions for the index'\n        },\n        metric: {\n          type: 'string',\n          description: 'Specifies the type of metric to use calculating distance.',\n          enum: [            'cosine',\n            'euclidean',\n            'dot-product'\n          ]\n        }\n      },\n      required: [        'dimensions',\n        'metric'\n      ]\n    }\n  }\n}\n```",
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
  const { index_name, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.vectorize.indexes.get(index_name, body)));
};

export default { metadata, tool, handler };
