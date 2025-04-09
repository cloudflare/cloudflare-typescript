// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.networks.routes.ips',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_routes_networks_zero_trust_ips',
  description: 'Fetches routes that contain the given IP address.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Cloudflare account ID',
      },
      ip: {
        type: 'string',
      },
      default_virtual_network_fallback: {
        type: 'boolean',
        description:
          'When the virtual_network_id parameter is not provided the request filter will default search routes that are in the default virtual network for the account. If this parameter is set to false, the search will include routes that do not have a virtual network.',
      },
      virtual_network_id: {
        type: 'string',
        description: 'UUID of the virtual network.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ip, ...body } = args;
  return client.zeroTrust.networks.routes.ips.get(ip, body);
};

export default { metadata, tool, handler };
