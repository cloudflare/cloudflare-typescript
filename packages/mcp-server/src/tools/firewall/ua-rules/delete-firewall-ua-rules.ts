// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.ua_rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_firewall_ua_rules',
  description: 'Deletes an existing User Agent Blocking rule.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      ua_rule_id: {
        type: 'string',
        description: 'The unique identifier of the User Agent Blocking rule.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ua_rule_id, ...body } = args;
  return client.firewall.uaRules.delete(ua_rule_id, body);
};

export default { metadata, tool, handler };
