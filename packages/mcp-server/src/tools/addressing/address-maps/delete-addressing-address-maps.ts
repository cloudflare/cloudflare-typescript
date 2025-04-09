// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'addressing.address_maps',
  operation: 'write',
  tags: [],
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

export const handler = (client: Cloudflare, args: any) => {
  const { address_map_id, ...body } = args;
  return client.addressing.addressMaps.delete(address_map_id, body);
};

export default { metadata, tool, handler };
