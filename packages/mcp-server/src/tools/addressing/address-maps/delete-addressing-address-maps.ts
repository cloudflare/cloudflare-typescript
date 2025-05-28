// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.address_maps',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/addressing/address_maps/{address_map_id}',
  operationId: 'ip-address-management-address-maps-delete-address-map',
};

export const tool: Tool = {
  name: 'delete_addressing_address_maps',
  description:
    'Delete a particular address map owned by the account. An Address Map must be disabled before it can be deleted.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { address_map_id, ...body } = args as any;
  return client.addressing.addressMaps.delete(address_map_id, body);
};

export default { metadata, tool, handler };
