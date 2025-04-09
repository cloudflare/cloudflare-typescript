// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.address_maps.accounts',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_address_maps_addressing_accounts',
  description: 'Add an account as a member of a particular address map.',
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
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { address_map_id, ...body } = args;
  return client.addressing.addressMaps.accounts.update(address_map_id, body);
};

export default { metadata, tool, handler };
