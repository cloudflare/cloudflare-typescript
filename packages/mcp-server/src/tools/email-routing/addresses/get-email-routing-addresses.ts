// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_routing.addresses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/email/routing/addresses/{destination_address_identifier}',
  operationId: 'email-routing-destination-addresses-get-a-destination-address',
};

export const tool: Tool = {
  name: 'get_email_routing_addresses',
  description: 'Gets information for a specific destination email already created.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      destination_address_identifier: {
        type: 'string',
        description: 'Destination address identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { destination_address_identifier, ...body } = args as any;
  return client.emailRouting.addresses.get(destination_address_identifier, body);
};

export default { metadata, tool, handler };
