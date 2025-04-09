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
  name: 'create_magic_cloud_networking_on_ramps',
  description: 'Create a new On-ramp (Closed Beta)',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      cloud_type: {
        type: 'string',
        enum: ['AWS', 'AZURE', 'GOOGLE'],
      },
      install_routes_in_cloud: {
        type: 'boolean',
      },
      install_routes_in_magic_wan: {
        type: 'boolean',
      },
      name: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['OnrampTypeSingle', 'OnrampTypeHub'],
      },
      adopted_hub_id: {
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
      hub_provider_id: {
        type: 'string',
      },
      manage_hub_to_hub_attachments: {
        type: 'boolean',
      },
      manage_vpc_to_hub_attachments: {
        type: 'boolean',
      },
      region: {
        type: 'string',
      },
      vpc: {
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
  return client.magicCloudNetworking.onRamps.create(body);
};

export default { metadata, tool, handler };
