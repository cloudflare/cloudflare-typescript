// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'secrets_store.stores',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/secrets_store/stores/{store_id}',
  operationId: 'secrets-store-delete-by-id',
};

export const tool: Tool = {
  name: 'delete_secrets_store_stores',
  description: 'Deletes a single store',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { store_id, ...body } = args as any;
  return asTextContentResult(await client.secretsStore.stores.delete(store_id, body));
};

export default { metadata, tool, handler };
