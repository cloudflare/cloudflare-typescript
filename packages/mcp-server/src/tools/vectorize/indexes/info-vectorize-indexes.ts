// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'cloudflare-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'vectorize.indexes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/vectorize/v2/indexes/{index_name}/info',
  operationId: 'vectorize-index-info',
};

export const tool: Tool = {
  name: 'info_vectorize_indexes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet information about a vectorize index.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/index_info_response',\n  $defs: {\n    index_info_response: {\n      type: 'object',\n      properties: {\n        dimensions: {\n          type: 'integer',\n          description: 'Specifies the number of dimensions for the index'\n        },\n        processedUpToDatetime: {\n          type: 'string',\n          description: 'Specifies the timestamp the last mutation batch was processed as an ISO8601 string.',\n          format: 'date-time'\n        },\n        processedUpToMutation: {\n          type: 'string',\n          description: 'The unique identifier for the async mutation operation containing the changeset.'\n        },\n        vectorCount: {\n          type: 'integer',\n          description: 'Specifies the number of vectors present in the index'\n        }\n      }\n    }\n  }\n}\n```",
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
      await maybeFilter(jq_filter, await client.vectorize.indexes.info(index_name, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
