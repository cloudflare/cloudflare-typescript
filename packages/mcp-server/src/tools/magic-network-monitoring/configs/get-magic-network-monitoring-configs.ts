// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_network_monitoring.configs',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_magic_network_monitoring_configs',
  description: 'Lists default sampling, router IPs and warp devices for account.',
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
  return client.magicNetworkMonitoring.configs.get(body);
};

export default { metadata, tool, handler };
