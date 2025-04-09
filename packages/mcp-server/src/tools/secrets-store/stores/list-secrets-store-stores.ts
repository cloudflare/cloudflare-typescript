// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'secrets_store.stores',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_secrets_store_stores',
  description: 'Lists all the stores in an account',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account Identifier',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.secretsStore.stores.list(body);
};

export default { metadata, tool, handler };
