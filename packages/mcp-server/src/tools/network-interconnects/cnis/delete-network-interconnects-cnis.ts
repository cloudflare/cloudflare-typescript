// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'network_interconnects.cnis',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_network_interconnects_cnis',
  description: 'Delete a specified CNI object',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Customer account tag',
      },
      cni: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { cni, ...body } = args;
  return client.networkInterconnects.cnis.delete(cni, body);
};

export default { metadata, tool, handler };
