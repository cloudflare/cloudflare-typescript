// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rum.rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_rum_rules',
  description: 'Updates a rule in a Web Analytics ruleset.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      ruleset_id: {
        type: 'string',
        description: 'The Web Analytics ruleset identifier.',
      },
      rule_id: {
        type: 'string',
        description: 'The Web Analytics rule identifier.',
      },
      host: {
        type: 'string',
      },
      inclusive: {
        type: 'boolean',
        description: 'Whether the rule includes or excludes traffic from being measured.',
      },
      is_paused: {
        type: 'boolean',
        description: 'Whether the rule is paused or not.',
      },
      paths: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { rule_id, ...body } = args;
  return client.rum.rules.update(rule_id, body);
};

export default { metadata, tool, handler };
