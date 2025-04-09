// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.on_ramps.address_spaces',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_on_ramps_magic_cloud_networking_address_spaces',
  description: 'Update the Magic WAN Address Space (Closed Beta)',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      prefixes: {
        type: 'array',
        items: {
          type: 'string',
          description: 'IP prefix in CIDR format.',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.magicCloudNetworking.onRamps.addressSpaces.update(body);
};

export default { metadata, tool, handler };
