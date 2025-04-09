// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.address_maps.ips',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_address_maps_addressing_ips',
  description: 'Remove an IP from a particular address map.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier of a Cloudflare account.',
      },
      address_map_id: {
        type: 'string',
        description: 'Identifier of an Address Map.',
      },
      ip_address: {
        type: 'string',
        description: 'An IPv4 or IPv6 address.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ip_address, ...body } = args;
  return client.addressing.addressMaps.ips.delete(ip_address, body);
};

export default { metadata, tool, handler };
