// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rulesets.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}/rules/{rule_id}',
};

export const tool: Tool = {
  name: 'delete_rulesets_rules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletes an existing rule from an account or zone ruleset.",
  inputSchema: {
    type: 'object',
    properties: {
      ruleset_id: {
        type: 'string',
        title: 'ID',
        description: 'The unique ID of the ruleset.',
      },
      rule_id: {
        type: 'string',
        title: 'ID',
        description: 'The unique ID of the rule.',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
    },
    required: ['ruleset_id', 'rule_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { rule_id, ...body } = args as any;
  return asTextContentResult(await client.rulesets.rules.delete(rule_id, body));
};

export default { metadata, tool, handler };
