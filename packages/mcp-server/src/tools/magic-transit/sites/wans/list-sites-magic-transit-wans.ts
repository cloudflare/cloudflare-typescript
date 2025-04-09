// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.sites.wans',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_sites_magic_transit_wans',
  description: 'Lists Site WANs associated with an account.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { site_id, ...body } = args;
  return client.magicTransit.sites.wans.list(site_id, body);
};

export default { metadata, tool, handler };
