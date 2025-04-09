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
  name: 'list_network_interconnects_interconnects',
  description: 'List existing interconnects',
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
      site: {
        type: 'string',
        description: 'If specified, only show interconnects located at the given site',
      },
      type: {
        type: 'string',
        description: 'If specified, only show interconnects of the given type',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.networkInterconnects.interconnects.list(body);
};

export default { metadata, tool, handler };
