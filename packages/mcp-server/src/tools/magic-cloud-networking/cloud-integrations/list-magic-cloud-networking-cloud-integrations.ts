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
  name: 'list_magic_cloud_networking_cloud_integrations',
  description: 'List Cloud Integrations (Closed Beta)',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      cloudflare: {
        type: 'boolean',
      },
      desc: {
        type: 'boolean',
      },
      order_by: {
        type: 'string',
        description: 'one of ["updated_at", "id", "cloud_type", "name"]',
      },
      status: {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.magicCloudNetworking.cloudIntegrations.list(body);
};

export default { metadata, tool, handler };
