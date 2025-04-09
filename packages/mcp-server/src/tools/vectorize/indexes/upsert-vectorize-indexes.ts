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
  name: 'upsert_vectorize_indexes',
  description:
    'Upserts vectors into the specified index, creating them if they do not exist and returns a mutation id corresponding to the vectors enqueued for upsertion.',
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
        description: 'ndjson file containing vectors to upsert.',
      },
      'unparsable-behavior': {
        type: 'string',
        description: 'Behavior for ndjson parse failures.',
        enum: ['error', 'discard'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { index_name, ...body } = args;
  return client.vectorize.indexes.upsert(index_name, body);
};

export default { metadata, tool, handler };
