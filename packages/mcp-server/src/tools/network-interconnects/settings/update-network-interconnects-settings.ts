// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'network_interconnects.settings',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_network_interconnects_settings',
  description: 'Update the current settings for the active account',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      default_asn: {
        type: 'integer',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.networkInterconnects.settings.update(body);
};

export default { metadata, tool, handler };
