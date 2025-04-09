// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'secrets_store.stores.secrets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'bulk_delete_stores_secrets_store_secrets',
  description: 'Deletes one or more secrets',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { store_id, ...body } = args;
  return client.secretsStore.stores.secrets.bulkDelete(store_id, body);
};

export default { metadata, tool, handler };
