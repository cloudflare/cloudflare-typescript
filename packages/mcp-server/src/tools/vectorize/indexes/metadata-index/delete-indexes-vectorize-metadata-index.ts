// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'vectorize.indexes.metadata_index',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_indexes_vectorize_metadata_index',
  description: 'Allow Vectorize to delete the specified metadata index.',
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
      propertyName: {
        type: 'string',
        description: 'Specifies the metadata property for which the index must be deleted.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { index_name, ...body } = args;
  return client.vectorize.indexes.metadataIndex.delete(index_name, body);
};

export default { metadata, tool, handler };
