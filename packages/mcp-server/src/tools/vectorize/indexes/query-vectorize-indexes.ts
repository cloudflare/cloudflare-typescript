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
  httpPath: '/accounts/{account_id}/vectorize/v2/indexes/{index_name}/query',
  operationId: 'vectorize-query-vector',
};

export const tool: Tool = {
  name: 'query_vectorize_indexes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFinds vectors closest to a given vector in an index.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/index_query_response',\n  $defs: {\n    index_query_response: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'Specifies the count of vectors returned by the search'\n        },\n        matches: {\n          type: 'array',\n          description: 'Array of vectors matched by the search',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Identifier for a Vector'\n              },\n              metadata: {\n                type: 'object',\n                additionalProperties: true\n              },\n              namespace: {\n                type: 'string'\n              },\n              score: {\n                type: 'number',\n                description: 'The score of the vector according to the index\\'s distance metric'\n              },\n              values: {\n                type: 'array',\n                items: {\n                  type: 'number'\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
        additionalProperties: true,
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
  const { index_name, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.vectorize.indexes.query(index_name, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
