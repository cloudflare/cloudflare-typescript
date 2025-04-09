// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_routing.dns',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_email_routing_dns',
  description: 'Unlock MX Records previously locked by Email Routing.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      name: {
        type: 'string',
        description: 'Domain of your zone.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.emailRouting.dns.edit(body);
};

export default { metadata, tool, handler };
