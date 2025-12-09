// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'vectorize.indexes.metadata_index',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/list',
  operationId: 'vectorize-list-metadata-indexes',
};

export const tool: Tool = {
  name: 'list_indexes_vectorize_metadata_index',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Metadata Indexes for the specified Vectorize Index.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/metadata_index_list_response',\n  $defs: {\n    metadata_index_list_response: {\n      type: 'object',\n      properties: {\n        metadataIndexes: {\n          type: 'array',\n          description: 'Array of indexed metadata properties.',\n          items: {\n            type: 'object',\n            properties: {\n              indexType: {\n                type: 'string',\n                description: 'Specifies the type of indexed metadata property.',\n                enum: [                  'string',\n                  'number',\n                  'boolean'\n                ]\n              },\n              propertyName: {\n                type: 'string',\n                description: 'Specifies the indexed metadata property.'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
    required: ['account_id', 'index_name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { index_name, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.vectorize.indexes.metadataIndex.list(index_name, body)),
    );
  } catch (error) {
    if (error instanceof Cloudflare.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
