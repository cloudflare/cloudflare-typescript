// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_firewall_rules',
  description: 'Deletes an existing firewall rule.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      rule_id: {
        type: 'string',
        description: 'The unique identifier of the firewall rule.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { rule_id, ...body } = args;
  return client.firewall.rules.delete(rule_id, body);
};

export default { metadata, tool, handler };
