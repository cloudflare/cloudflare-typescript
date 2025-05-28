// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.sites.wans',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}',
  operationId: 'magic-site-wans-delete-wan',
};

export const tool: Tool = {
  name: 'delete_sites_magic_transit_wans',
  description: 'Remove a specific Site WAN.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      site_id: {
        type: 'string',
        description: 'Identifier',
      },
      wan_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { wan_id, ...body } = args as any;
  return client.magicTransit.sites.wans.delete(wan_id, body);
};

export default { metadata, tool, handler };
