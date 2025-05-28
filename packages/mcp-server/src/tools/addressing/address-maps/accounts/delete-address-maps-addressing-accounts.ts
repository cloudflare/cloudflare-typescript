// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.address_maps.accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/addressing/address_maps/{address_map_id}/accounts/{account_id}',
  operationId: 'ip-address-management-address-maps-remove-an-account-membership-from-an-address-map',
};

export const tool: Tool = {
  name: 'delete_address_maps_addressing_accounts',
  description: 'Remove an account as a member of a particular address map.',
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
  return client.addressing.addressMaps.accounts.delete(address_map_id, body);
};

export default { metadata, tool, handler };
