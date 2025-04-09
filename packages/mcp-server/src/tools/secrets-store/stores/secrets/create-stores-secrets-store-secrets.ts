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
  name: 'create_stores_secrets_store_secrets',
  description: 'Creates a secret in the account',
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
      body: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'The name of the secret',
            },
            scopes: {
              type: 'array',
              description: 'The list of services that can use this secret.',
              items: {
                type: 'string',
              },
            },
            value: {
              type: 'string',
              description:
                "The value of the secret. Note that this is 'write only' - no API reponse will provide this value, it is only used to create/modify secrets.",
            },
            comment: {
              type: 'string',
              description: 'Freeform text describing the secret',
            },
          },
          required: ['name', 'scopes', 'value'],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { store_id, ...body } = args;
  return client.secretsStore.stores.secrets.create(store_id, body);
};

export default { metadata, tool, handler };
