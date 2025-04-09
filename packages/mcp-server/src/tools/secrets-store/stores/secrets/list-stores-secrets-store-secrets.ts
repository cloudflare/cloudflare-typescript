// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'secrets_store.stores.secrets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_stores_secrets_store_secrets',
  description: 'Lists all store secrets',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account Identifier',
      },
      store_id: {
        type: 'string',
        description: 'Store Identifier',
      },
      direction: {
        type: 'string',
        description: 'Direction to sort objects',
        enum: ['asc', 'desc'],
      },
      order: {
        type: 'string',
        description: 'Order secrets by values in the given field',
        enum: ['name', 'comment', 'created', 'modified', 'status'],
      },
      page: {
        type: 'integer',
        description: 'Page number',
      },
      per_page: {
        type: 'integer',
        description: 'Number of objects to return per page',
      },
      search: {
        type: 'string',
        description: 'Search secrets using a filter string, filtering across name and comment',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { store_id, ...body } = args;
  return client.secretsStore.stores.secrets.list(store_id, body);
};

export default { metadata, tool, handler };
