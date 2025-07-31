// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'vectorize.indexes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/vectorize/v2/indexes/{index_name}/get_by_ids',
  operationId: 'vectorize-get-vectors-by-id',
};

export const tool: Tool = {
  name: 'get_by_ids_vectorize_indexes',
  description: 'Get a set of vectors from an index by their vector identifiers.',
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
      ids: {
        type: 'array',
        description: 'A list of vector identifiers to retrieve from the index indicated by the path.',
        items: {
          type: 'string',
          description: 'Identifier for a Vector',
        },
      },
    },
    required: ['account_id', 'index_name'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { index_name, ...body } = args as any;
  return asTextContentResult((await client.vectorize.indexes.getByIDs(index_name, body)) as object);
};

export default { metadata, tool, handler };
