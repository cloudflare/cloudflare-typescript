// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.resources',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_magic_cloud_networking_resources',
  description: 'Read an resource from the Resource Catalog (Closed Beta)',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      resource_id: {
        type: 'string',
      },
      v2: {
        type: 'boolean',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { resource_id, ...body } = args;
  return client.magicCloudNetworking.resources.get(resource_id, body);
};

export default { metadata, tool, handler };
