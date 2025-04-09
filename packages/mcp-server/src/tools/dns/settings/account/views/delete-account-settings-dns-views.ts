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
  name: 'delete_account_settings_dns_views',
  description: 'Delete an existing Internal DNS View',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      view_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { view_id, ...body } = args;
  return client.dns.settings.account.views.delete(view_id, body);
};

export default { metadata, tool, handler };
