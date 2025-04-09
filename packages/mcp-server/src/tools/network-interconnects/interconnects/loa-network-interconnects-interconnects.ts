// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'network_interconnects.interconnects',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'loa_network_interconnects_interconnects',
  description: 'Generate the Letter of Authorization (LOA) for a given interconnect',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Customer account tag',
      },
      icon: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { icon, ...body } = args;
  return client.networkInterconnects.interconnects.loa(icon, body);
};

export default { metadata, tool, handler };
