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
  name: 'get_magic_cloud_networking_cloud_integrations',
  description: 'Read a Cloud Integration (Closed Beta)',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      provider_id: {
        type: 'string',
      },
      status: {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { provider_id, ...body } = args;
  return client.magicCloudNetworking.cloudIntegrations.get(provider_id, body);
};

export default { metadata, tool, handler };
