// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_cloud_networking.on_ramps',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_magic_cloud_networking_on_ramps',
  description: 'Update an On-ramp (Closed Beta)',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      onramp_id: {
        type: 'string',
      },
      attached_hubs: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      attached_vpcs: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      description: {
        type: 'string',
      },
      install_routes_in_cloud: {
        type: 'boolean',
      },
      install_routes_in_magic_wan: {
        type: 'boolean',
      },
      manage_hub_to_hub_attachments: {
        type: 'boolean',
      },
      manage_vpc_to_hub_attachments: {
        type: 'boolean',
      },
      name: {
        type: 'string',
      },
      vpc: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { onramp_id, ...body } = args;
  return client.magicCloudNetworking.onRamps.update(onramp_id, body);
};

export default { metadata, tool, handler };
