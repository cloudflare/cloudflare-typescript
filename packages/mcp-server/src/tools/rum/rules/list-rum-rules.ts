// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rum.rules',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/rum/v2/{ruleset_id}/rules',
  operationId: 'web-analytics-list-rules',
};

export const tool: Tool = {
  name: 'list_rum_rules',
  description: 'Lists all the rules in a Web Analytics ruleset.',
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
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { ruleset_id, ...body } = args as any;
  return asTextContentResult(await client.rum.rules.list(ruleset_id, body));
};

export default { metadata, tool, handler };
