// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'kv.namespaces',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_kv_namespaces',
  description: 'Returns the namespaces owned by an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      direction: {
        type: 'string',
        description: 'Direction to order namespaces.',
        enum: ['asc', 'desc'],
      },
      order: {
        type: 'string',
        description: 'Field to order results by.',
        enum: ['id', 'title'],
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Maximum number of results per page.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.kv.namespaces.list(body);
};

export default { metadata, tool, handler };
