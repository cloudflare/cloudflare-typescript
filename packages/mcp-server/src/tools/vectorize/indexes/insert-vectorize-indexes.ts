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
  httpPath: '/accounts/{account_id}/vectorize/v2/indexes/{index_name}/insert',
  operationId: 'vectorize-insert-vector',
};

export const tool: Tool = {
  name: 'insert_vectorize_indexes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nInserts vectors into the specified index and returns a mutation id corresponding to the vectors enqueued for insertion.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/index_insert_response',\n  $defs: {\n    index_insert_response: {\n      type: 'object',\n      properties: {\n        mutationId: {\n          type: 'string',\n          description: 'The unique identifier for the async mutation operation containing the changeset.'\n        }\n      }\n    }\n  }\n}\n```",
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
      body: {
        type: 'string',
        description: 'ndjson file containing vectors to insert.',
      },
      'unparsable-behavior': {
        type: 'string',
        description: 'Behavior for ndjson parse failures.',
        enum: ['error', 'discard'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['account_id', 'index_name', 'body'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { index_name, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.vectorize.indexes.insert(index_name, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
