// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_routing',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'enable_email_routing',
  description: 'Enable you Email Routing zone. Add and lock the necessary MX and SPF records.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.emailRouting.enable(body);
};

export default { metadata, tool, handler };
