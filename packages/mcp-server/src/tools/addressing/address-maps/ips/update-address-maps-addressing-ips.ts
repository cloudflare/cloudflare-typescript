// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.address_maps.ips',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/addressing/address_maps/{address_map_id}/ips/{ip_address}',
  operationId: 'ip-address-management-address-maps-add-an-ip-to-an-address-map',
};

export const tool: Tool = {
  name: 'update_address_maps_addressing_ips',
  description: 'Add an IP from a prefix owned by the account to a particular address map.',
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
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { ip_address, ...body } = args as any;
  return client.addressing.addressMaps.ips.update(ip_address, body);
};

export default { metadata, tool, handler };
