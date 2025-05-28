// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
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
  description: 'List Metadata Indexes for the specified Vectorize Index.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { index_name, ...body } = args as any;
  return client.vectorize.indexes.metadataIndex.list(index_name, body);
};

export default { metadata, tool, handler };
