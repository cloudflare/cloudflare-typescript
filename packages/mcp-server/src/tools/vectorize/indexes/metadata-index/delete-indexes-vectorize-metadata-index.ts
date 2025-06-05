// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'vectorize.indexes.metadata_index',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/delete',
  operationId: 'vectorize-delete-metadata-index',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { index_name, ...body } = args as any;
  return asTextContentResult(await client.vectorize.indexes.metadataIndex.delete(index_name, body));
};

export default { metadata, tool, handler };
