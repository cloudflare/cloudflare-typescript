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
  name: 'status_network_interconnects_interconnects',
  description: 'Get the current status of an interconnect object',
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
  return client.networkInterconnects.interconnects.status(icon, body);
};

export default { metadata, tool, handler };
