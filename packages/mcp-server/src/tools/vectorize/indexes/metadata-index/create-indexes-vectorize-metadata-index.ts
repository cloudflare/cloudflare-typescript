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
  httpPath: '/accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/create',
  operationId: 'vectorize-create-metadata-index',
};

export const tool: Tool = {
  name: 'create_indexes_vectorize_metadata_index',
  description: 'Enable metadata filtering based on metadata property. Limited to 10 properties.',
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
      indexType: {
        type: 'string',
        description: 'Specifies the type of metadata property to index.',
        enum: ['string', 'number', 'boolean'],
      },
      propertyName: {
        type: 'string',
        description: 'Specifies the metadata property to index.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { index_name, ...body } = args as any;
  return asTextContentResult(await client.vectorize.indexes.metadataIndex.create(index_name, body));
};

export default { metadata, tool, handler };
