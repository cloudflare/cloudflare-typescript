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
  name: 'create_email_routing_addresses',
  description:
    'Create a destination address to forward your emails to. Destination addresses need to be verified before they can be used.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      email: {
        type: 'string',
        description: 'The contact email address of the user.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.emailRouting.addresses.create(body);
};

export default { metadata, tool, handler };
