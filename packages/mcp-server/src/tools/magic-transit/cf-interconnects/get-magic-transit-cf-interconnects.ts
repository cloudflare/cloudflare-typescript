// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.cf_interconnects',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_magic_transit_cf_interconnects',
  description: 'Lists details for a specific interconnect.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      cf_interconnect_id: {
        type: 'string',
        description: 'Identifier',
      },
      'x-magic-new-hc-target': {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { cf_interconnect_id, ...body } = args;
  return client.magicTransit.cfInterconnects.get(cf_interconnect_id, body);
};

export default { metadata, tool, handler };
