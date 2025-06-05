// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.address_maps.zones',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/addressing/address_maps/{address_map_id}/zones/{zone_id}',
  operationId: 'ip-address-management-address-maps-add-a-zone-membership-to-an-address-map',
};

export const tool: Tool = {
  name: 'update_address_maps_addressing_zones',
  description: 'Add a zone as a member of a particular address map.',
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
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { address_map_id, ...body } = args as any;
  return asTextContentResult(await client.addressing.addressMaps.zones.update(address_map_id, body));
};

export default { metadata, tool, handler };
