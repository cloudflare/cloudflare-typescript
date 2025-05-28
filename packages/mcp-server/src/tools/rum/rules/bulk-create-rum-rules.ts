// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'rum.rules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/rum/v2/{ruleset_id}/rules',
  operationId: 'web-analytics-modify-rules',
};

export const tool: Tool = {
  name: 'bulk_create_rum_rules',
  description: 'Modifies one or more rules in a Web Analytics ruleset with a single request.',
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
      delete_rules: {
        type: 'array',
        description: 'A list of rule identifiers to delete.',
        items: {
          type: 'string',
          description: 'The Web Analytics rule identifier.',
        },
      },
      rules: {
        type: 'array',
        description: 'A list of rules to create or update.',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'The Web Analytics rule identifier.',
            },
            host: {
              type: 'string',
            },
            inclusive: {
              type: 'boolean',
            },
            is_paused: {
              type: 'boolean',
            },
            paths: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { ruleset_id, ...body } = args as any;
  return client.rum.rules.bulkCreate(ruleset_id, body);
};

export default { metadata, tool, handler };
