// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.apps',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/magic/apps/{account_app_id}',
  operationId: 'magic-account-apps-patch-app',
};

export const tool: Tool = {
  name: 'edit_magic_transit_apps',
  description: 'Updates an Account App',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      account_app_id: {
        type: 'string',
        description: 'Identifier',
      },
      hostnames: {
        type: 'array',
        description: 'FQDNs to associate with traffic decisions.',
        items: {
          type: 'string',
        },
      },
      ip_subnets: {
        type: 'array',
        description: 'IPv4 CIDRs to associate with traffic decisions. (IPv6 CIDRs are currently unsupported)',
        items: {
          type: 'string',
          description: 'A valid CIDR notation representing an IP range.',
        },
      },
      name: {
        type: 'string',
        description: 'Display name for the app.',
      },
      type: {
        type: 'string',
        description: 'Category of the app.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { account_app_id, ...body } = args as any;
  return asTextContentResult(await client.magicTransit.apps.edit(account_app_id, body));
};

export default { metadata, tool, handler };
