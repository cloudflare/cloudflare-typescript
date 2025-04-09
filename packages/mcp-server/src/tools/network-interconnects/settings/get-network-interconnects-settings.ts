// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'network_interconnects.settings',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_network_interconnects_settings',
  description: 'Get the current settings for the active account',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.networkInterconnects.settings.get(body);
};

export default { metadata, tool, handler };
