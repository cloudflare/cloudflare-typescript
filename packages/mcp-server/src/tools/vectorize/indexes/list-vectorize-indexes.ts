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
  name: 'list_vectorize_indexes',
  description: 'Returns a list of Vectorize Indexes',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.vectorize.indexes.list(body);
};

export default { metadata, tool, handler };
