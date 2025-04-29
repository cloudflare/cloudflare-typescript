// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'network_interconnects.slots',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_network_interconnects_slots',
  description: 'Get information about the specified slot',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Customer account tag',
      },
      slot: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { slot, ...body } = args as any;
  return client.networkInterconnects.slots.get(slot, body);
};

export default { metadata, tool, handler };
