// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_nameservers',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_custom_nameservers',
  description: "List an account's custom nameservers.",
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Account identifier tag.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.customNameservers.get(body);
};

export default { metadata, tool, handler };
