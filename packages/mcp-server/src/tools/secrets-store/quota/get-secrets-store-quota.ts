// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'secrets_store.quota',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_secrets_store_quota',
  description: 'Lists the number of secrets used in the account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.secretsStore.quota.get(body);
};

export default { metadata, tool, handler };
