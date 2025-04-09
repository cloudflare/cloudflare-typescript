// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_routing.rules',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_email_routing_rules',
  description: 'Get information for a specific routing rule already created.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      rule_identifier: {
        type: 'string',
        description: 'Routing rule identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { rule_identifier, ...body } = args;
  return client.emailRouting.rules.get(rule_identifier, body);
};

export default { metadata, tool, handler };
