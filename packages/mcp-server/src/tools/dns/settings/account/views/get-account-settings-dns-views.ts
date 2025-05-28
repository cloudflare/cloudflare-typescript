// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.settings.account.views',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/dns_settings/views/{view_id}',
  operationId: 'dns-views-for-an-account-get-internal-dns-view',
};

export const tool: Tool = {
  name: 'get_account_settings_dns_views',
  description: 'Get DNS Internal View',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { view_id, ...body } = args as any;
  return client.dns.settings.account.views.get(view_id, body);
};

export default { metadata, tool, handler };
