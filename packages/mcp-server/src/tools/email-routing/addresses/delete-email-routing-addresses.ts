// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_routing.addresses',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_email_routing_addresses',
  description: 'Deletes a specific destination address.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      destination_address_identifier: {
        type: 'string',
        description: 'Destination address identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { destination_address_identifier, ...body } = args;
  return client.emailRouting.addresses.delete(destination_address_identifier, body);
};

export default { metadata, tool, handler };
