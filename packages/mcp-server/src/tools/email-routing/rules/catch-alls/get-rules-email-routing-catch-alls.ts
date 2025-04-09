// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_routing.rules.catch_alls',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_rules_email_routing_catch_alls',
  description: 'Get information on the default catch-all routing rule.',
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
  return client.emailRouting.rules.catchAlls.get(body);
};

export default { metadata, tool, handler };
