// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.ua_rules',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/firewall/ua_rules/{ua_rule_id}',
  operationId: 'user-agent-blocking-rules-delete-a-user-agent-blocking-rule',
};

export const tool: Tool = {
  name: 'delete_firewall_ua_rules',
  description: 'Deletes an existing User Agent Blocking rule.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      ua_rule_id: {
        type: 'string',
        description: 'The unique identifier of the User Agent Blocking rule.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { ua_rule_id, ...body } = args as any;
  return asTextContentResult(await client.firewall.uaRules.delete(ua_rule_id, body));
};

export default { metadata, tool, handler };
