// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.settings.account.views',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_account_settings_dns_views',
  description: 'Create Internal DNS View for an account',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      name: {
        type: 'string',
        description: 'The name of the view.',
      },
      zones: {
        type: 'array',
        description: 'The list of zones linked to this view.',
        items: {
          type: 'string',
          description: 'zone id',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.dns.settings.account.views.create(body);
};

export default { metadata, tool, handler };
