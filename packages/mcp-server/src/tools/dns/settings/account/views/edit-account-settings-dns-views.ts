// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.settings.account.views',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/dns_settings/views/{view_id}',
  operationId: 'dns-views-for-an-account-update-internal-dns-view',
};

export const tool: Tool = {
  name: 'edit_account_settings_dns_views',
  description: 'Update an existing Internal DNS View',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { view_id, ...body } = args as any;
  return client.dns.settings.account.views.edit(view_id, body);
};

export default { metadata, tool, handler };
