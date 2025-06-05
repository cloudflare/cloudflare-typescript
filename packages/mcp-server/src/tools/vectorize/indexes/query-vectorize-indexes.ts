// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
  description: 'Finds vectors closest to a given vector in an index.',
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
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { index_name, ...body } = args as any;
  return asTextContentResult(await client.vectorize.indexes.query(index_name, body));
};

export default { metadata, tool, handler };
