// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.cloud_integrations',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'initial_setup_magic_cloud_networking_cloud_integrations',
  description: 'Get initial configuration to complete Cloud Integration setup (Closed Beta)',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      provider_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { provider_id, ...body } = args;
  return client.magicCloudNetworking.cloudIntegrations.initialSetup(provider_id, body);
};

export default { metadata, tool, handler };
