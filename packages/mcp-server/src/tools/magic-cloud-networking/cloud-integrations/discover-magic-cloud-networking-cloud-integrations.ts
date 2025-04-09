// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.cloud_integrations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'discover_magic_cloud_networking_cloud_integrations',
  description: 'Run discovery for a Cloud Integration (Closed Beta)',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      provider_id: {
        type: 'string',
      },
      v2: {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { provider_id, ...body } = args;
  return client.magicCloudNetworking.cloudIntegrations.discover(provider_id, body);
};

export default { metadata, tool, handler };
