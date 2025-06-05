// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'secrets_store.stores.secrets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}/duplicate',
  operationId: 'secrets-store-duplicate-by-id',
};

export const tool: Tool = {
  name: 'duplicate_stores_secrets_store_secrets',
  description: 'Duplicates the secret, keeping the value',
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
      name: {
        type: 'string',
        description: 'The name of the secret',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { secret_id, ...body } = args as any;
  return asTextContentResult(await client.secretsStore.stores.secrets.duplicate(secret_id, body));
};

export default { metadata, tool, handler };
