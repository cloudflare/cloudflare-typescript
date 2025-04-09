// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_user',
  description: 'Edit part of your user details.',
  inputSchema: {
    type: 'object',
    properties: {
      country: {
        type: 'string',
        description: 'The country in which the user lives.',
      },
      first_name: {
        type: 'string',
        description: "User's first name",
      },
      last_name: {
        type: 'string',
        description: "User's last name",
      },
      telephone: {
        type: 'string',
        description: "User's telephone number",
      },
      zipcode: {
        type: 'string',
        description: 'The zipcode or postal code where the user lives.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.user.edit(body);
};

export default { metadata, tool, handler };
