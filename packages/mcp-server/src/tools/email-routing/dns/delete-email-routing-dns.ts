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
  name: 'delete_email_routing_dns',
  description:
    'Disable your Email Routing zone. Also removes additional MX records previously required for Email Routing to work.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.emailRouting.dns.delete(body);
};

export default { metadata, tool, handler };
