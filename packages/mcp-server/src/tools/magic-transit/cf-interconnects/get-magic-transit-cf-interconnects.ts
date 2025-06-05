// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_transit.cf_interconnects',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/magic/cf_interconnects/{cf_interconnect_id}',
  operationId: 'magic-interconnects-list-interconnect-details',
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

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { cf_interconnect_id, ...body } = args as any;
  return asTextContentResult(await client.magicTransit.cfInterconnects.get(cf_interconnect_id, body));
};

export default { metadata, tool, handler };
