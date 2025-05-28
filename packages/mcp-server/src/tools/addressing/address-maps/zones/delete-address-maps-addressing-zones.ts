// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.address_maps.zones',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/addressing/address_maps/{address_map_id}/zones/{zone_id}',
  operationId: 'ip-address-management-address-maps-remove-a-zone-membership-from-an-address-map',
};

export const tool: Tool = {
  name: 'delete_address_maps_addressing_zones',
  description: 'Remove a zone as a member of a particular address map.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier of a zone.',
      },
      account_id: {
        type: 'string',
        description: 'Identifier of a Cloudflare account.',
      },
      address_map_id: {
        type: 'string',
        description: 'Identifier of an Address Map.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { address_map_id, ...body } = args as any;
  return client.addressing.addressMaps.zones.delete(address_map_id, body);
};

export default { metadata, tool, handler };
