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
  name: 'discover_all_magic_cloud_networking_cloud_integrations',
  description: 'Run discovery for all Cloud Integrations in an account (Closed Beta)',
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
  return client.magicCloudNetworking.cloudIntegrations.discoverAll(body);
};

export default { metadata, tool, handler };
