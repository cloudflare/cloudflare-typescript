// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_routing.dns',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_email_routing_dns',
  description: 'Show the DNS records needed to configure your Email Routing zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      subdomain: {
        type: 'string',
        description: 'Domain of your zone.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.emailRouting.dns.get(body);
};

export default { metadata, tool, handler };
