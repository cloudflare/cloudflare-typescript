// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.on_ramps.address_spaces',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_on_ramps_magic_cloud_networking_address_spaces',
  description: 'Read the Magic WAN Address Space (Closed Beta)',
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
  return client.magicCloudNetworking.onRamps.addressSpaces.list(body);
};

export default { metadata, tool, handler };
