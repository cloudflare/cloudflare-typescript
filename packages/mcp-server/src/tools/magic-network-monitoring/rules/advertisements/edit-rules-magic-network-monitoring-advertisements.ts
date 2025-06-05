// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'magic_network_monitoring.rules.advertisements',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/accounts/{account_id}/mnm/rules/{rule_id}/advertisement',
  operationId: 'magic-network-monitoring-rules-update-advertisement-for-rule',
};

export const tool: Tool = {
  name: 'edit_rules_magic_network_monitoring_advertisements',
  description: 'Update advertisement for rule.',
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
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { rule_id, ...body } = args as any;
  return asTextContentResult(await client.magicNetworkMonitoring.rules.advertisements.edit(rule_id, body));
};

export default { metadata, tool, handler };
