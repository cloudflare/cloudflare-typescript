// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'vectorize.indexes',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'info_vectorize_indexes',
  description: 'Get information about a vectorize index.',
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

export const handler = (client: Cloudflare, args: any) => {
  const { index_name, ...body } = args;
  return client.vectorize.indexes.info(index_name, body);
};

export default { metadata, tool, handler };
