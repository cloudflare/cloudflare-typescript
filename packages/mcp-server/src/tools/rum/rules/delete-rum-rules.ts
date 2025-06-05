// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rum.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/rum/v2/{ruleset_id}/rule/{rule_id}',
  operationId: 'web-analytics-delete-rule',
};

export const tool: Tool = {
  name: 'delete_rum_rules',
  description: 'Deletes an existing rule from a Web Analytics ruleset.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier.',
      },
      ruleset_id: {
        type: 'string',
        description: 'The Web Analytics ruleset identifier.',
      },
      rule_id: {
        type: 'string',
        description: 'The Web Analytics rule identifier.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { rule_id, ...body } = args as any;
  return asTextContentResult(await client.rum.rules.delete(rule_id, body));
};

export default { metadata, tool, handler };
