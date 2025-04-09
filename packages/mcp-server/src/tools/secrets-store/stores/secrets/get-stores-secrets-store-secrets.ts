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
  name: 'get_stores_secrets_store_secrets',
  description: 'Returns details of a single secret',
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
      secret_id: {
        type: 'string',
        description: 'Secret identifier tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { secret_id, ...body } = args;
  return client.secretsStore.stores.secrets.get(secret_id, body);
};

export default { metadata, tool, handler };
