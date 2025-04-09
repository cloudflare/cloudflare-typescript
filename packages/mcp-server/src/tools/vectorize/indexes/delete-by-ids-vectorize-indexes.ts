// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'vectorize.indexes',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_by_ids_vectorize_indexes',
  description: 'Delete a set of vectors from an index by their vector identifiers.',
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
        description: 'A list of vector identifiers to delete from the index indicated by the path.',
        items: {
          type: 'string',
          description: 'Identifier for a Vector',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { index_name, ...body } = args;
  return client.vectorize.indexes.deleteByIDs(index_name, body);
};

export default { metadata, tool, handler };
