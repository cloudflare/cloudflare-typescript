// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'vectorize.indexes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/vectorize/v2/indexes',
  operationId: 'vectorize-create-vectorize-index',
};

export const tool: Tool = {
  name: 'create_vectorize_indexes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates and returns a new Vectorize Index.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/create_index',\n  $defs: {\n    create_index: {\n      type: 'object',\n      properties: {\n        config: {\n          $ref: '#/$defs/index_dimension_configuration'\n        },\n        created_on: {\n          type: 'string',\n          description: 'Specifies the timestamp the resource was created as an ISO8601 string.',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Specifies the description of the index.'\n        },\n        modified_on: {\n          type: 'string',\n          description: 'Specifies the timestamp the resource was modified as an ISO8601 string.',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string'\n        }\n      }\n    },\n    index_dimension_configuration: {\n      type: 'object',\n      properties: {\n        dimensions: {\n          type: 'integer',\n          description: 'Specifies the number of dimensions for the index'\n        },\n        metric: {\n          type: 'string',\n          description: 'Specifies the type of metric to use calculating distance.',\n          enum: [            'cosine',\n            'euclidean',\n            'dot-product'\n          ]\n        }\n      },\n      required: [        'dimensions',\n        'metric'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      config: {
        anyOf: [
          {
            $ref: '#/$defs/index_dimension_configuration',
          },
          {
            type: 'object',
            properties: {
              preset: {
                type: 'string',
                description: 'Specifies the preset to use for the index.',
                enum: [
                  '@cf/baai/bge-small-en-v1.5',
                  '@cf/baai/bge-base-en-v1.5',
                  '@cf/baai/bge-large-en-v1.5',
                  'openai/text-embedding-ada-002',
                  'cohere/embed-multilingual-v2.0',
                ],
              },
            },
            required: ['preset'],
          },
        ],
        description: 'Specifies the type of configuration to use for the index.',
      },
      name: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'Specifies the description of the index.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'config', 'name'],
    $defs: {
      index_dimension_configuration: {
        type: 'object',
        properties: {
          dimensions: {
            type: 'integer',
            description: 'Specifies the number of dimensions for the index',
          },
          metric: {
            type: 'string',
            description: 'Specifies the type of metric to use calculating distance.',
            enum: ['cosine', 'euclidean', 'dot-product'],
          },
        },
        required: ['dimensions', 'metric'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.vectorize.indexes.create(body)));
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
