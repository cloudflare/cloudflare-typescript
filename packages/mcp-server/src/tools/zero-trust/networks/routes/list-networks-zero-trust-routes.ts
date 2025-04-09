// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.routes',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_networks_zero_trust_routes',
  description: 'Lists and filters private network routes in an account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      comment: {
        type: 'string',
        description: 'Optional remark describing the route.',
      },
      existed_at: {
        type: 'string',
        description:
          'If provided, include only resources that were created (and not deleted) before this time. URL encoded.',
      },
      is_deleted: {
        type: 'boolean',
        description:
          'If `true`, only include deleted routes. If `false`, exclude deleted routes. If empty, all routes will be included.',
      },
      network_subset: {
        type: 'string',
        description: 'If set, only list routes that are contained within this IP range.',
      },
      network_superset: {
        type: 'string',
        description: 'If set, only list routes that contain this IP range.',
      },
      page: {
        type: 'number',
        description: 'Page number of paginated results.',
      },
      per_page: {
        type: 'number',
        description: 'Number of results to display.',
      },
      route_id: {
        type: 'string',
        description: 'UUID of the route.',
      },
      tun_types: {
        type: 'array',
        description: 'The types of tunnels to filter by, separated by commas.',
        items: {
          type: 'string',
          description: 'The type of tunnel.',
          enum: ['cfd_tunnel', 'warp_connector', 'warp', 'magic', 'ip_sec', 'gre', 'cni'],
        },
      },
      tunnel_id: {
        type: 'string',
        description: 'UUID of the tunnel.',
      },
      virtual_network_id: {
        type: 'string',
        description: 'UUID of the virtual network.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.networks.routes.list(body);
};

export default { metadata, tool, handler };
