// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.address_maps',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_addressing_address_maps',
  description: 'Show a particular address map owned by the account.',
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

export const handler = (client: Cloudflare, args: any) => {
  const { address_map_id, ...body } = args;
  return client.addressing.addressMaps.get(address_map_id, body);
};

export default { metadata, tool, handler };
