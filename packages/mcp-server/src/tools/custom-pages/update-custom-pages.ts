// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_pages',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_custom_pages',
  description: 'Updates the configuration of an existing custom page.',
  inputSchema: {
    type: 'object',
    properties: {
      identifier: {
        type: 'string',
        description: 'Identifier',
      },
      state: {
        type: 'string',
        description: 'The custom page state.',
        enum: ['default', 'customized'],
      },
      url: {
        type: 'string',
        description: 'The URL associated with the custom page.',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { identifier, ...body } = args;
  return client.customPages.update(identifier, body);
};

export default { metadata, tool, handler };
