// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_network_monitoring.rules',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_magic_network_monitoring_rules',
  description: 'List a single network monitoring rule for account.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      rule_id: {
        type: 'string',
        description: 'The id of the rule. Must be unique.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { rule_id, ...body } = args;
  return client.magicNetworkMonitoring.rules.get(rule_id, body);
};

export default { metadata, tool, handler };
