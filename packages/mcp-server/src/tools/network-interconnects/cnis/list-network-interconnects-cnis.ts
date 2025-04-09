// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'network_interconnects.cnis',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_network_interconnects_cnis',
  description: 'List existing CNI objects',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Customer account tag',
      },
      cursor: {
        type: 'integer',
      },
      limit: {
        type: 'integer',
      },
      slot: {
        type: 'string',
        description: 'If specified, only show CNIs associated with the specified slot',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.networkInterconnects.cnis.list(body);
};

export default { metadata, tool, handler };
