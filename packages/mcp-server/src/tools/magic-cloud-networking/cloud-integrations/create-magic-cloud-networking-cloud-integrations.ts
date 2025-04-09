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
  name: 'create_magic_cloud_networking_cloud_integrations',
  description: 'Create a new Cloud Integration (Closed Beta)',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      cloud_type: {
        type: 'string',
        enum: ['AWS', 'AZURE', 'GOOGLE', 'CLOUDFLARE'],
      },
      friendly_name: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      forwarded: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.magicCloudNetworking.cloudIntegrations.create(body);
};

export default { metadata, tool, handler };
