// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_network_monitoring.configs',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_magic_network_monitoring_configs',
  description:
    'Update an existing network monitoring configuration, requires the entire configuration to be updated at once.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      default_sampling: {
        type: 'number',
        description:
          'Fallback sampling rate of flow messages being sent in packets per second. This should match the packet sampling rate configured on the router.',
      },
      name: {
        type: 'string',
        description: 'The account name.',
      },
      router_ips: {
        type: 'array',
        items: {
          type: 'string',
          description:
            'IPv4 CIDR of the router sourcing flow data. Only /32 addresses are currently supported.',
        },
      },
      warp_devices: {
        type: 'array',
        items: {
          type: 'object',
          description: 'Object representing a warp device with an ID and name.',
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier for the warp device.',
            },
            name: {
              type: 'string',
              description: 'Name of the warp device.',
            },
            router_ip: {
              type: 'string',
              description:
                'IPv4 CIDR of the router sourcing flow data associated with this warp device. Only /32 addresses are currently supported.',
            },
          },
          required: ['id', 'name', 'router_ip'],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.magicNetworkMonitoring.configs.update(body);
};

export default { metadata, tool, handler };
