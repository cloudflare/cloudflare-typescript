// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'dns.settings.account.views',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/dns_settings/views/{view_id}',
  operationId: 'dns-views-for-an-account-delete-internal-dns-view',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { view_id, ...body } = args as any;
  return asTextContentResult(await client.dns.settings.account.views.delete(view_id, body));
};

export default { metadata, tool, handler };
