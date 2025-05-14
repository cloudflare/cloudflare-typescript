// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_routing.rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_email_routing_rules',
  description: 'Update actions and matches, or enable/disable specific routing rules.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      rule_identifier: {
        type: 'string',
        description: 'Routing rule identifier.',
      },
      actions: {
        type: 'array',
        description: 'List actions patterns.',
        items: {
          $ref: '#/$defs/action',
        },
      },
      matchers: {
        type: 'array',
        description: 'Matching patterns to forward to your actions.',
        items: {
          $ref: '#/$defs/matcher',
        },
      },
      enabled: {
        type: 'string',
        description: 'Routing rule status.',
        enum: [true, false],
      },
      name: {
        type: 'string',
        description: 'Routing rule name.',
      },
      priority: {
        type: 'number',
        description: 'Priority of the routing rule.',
      },
    },
    $defs: {
      action: {
        type: 'object',
        description: 'Actions pattern.',
        properties: {
          type: {
            type: 'string',
            description: 'Type of supported action.',
            enum: ['drop', 'forward', 'worker'],
          },
          value: {
            type: 'array',
            items: {
              type: 'string',
              description: 'Value for action.',
            },
          },
        },
        required: ['type'],
      },
      matcher: {
        type: 'object',
        description: 'Matching pattern to forward your actions.',
        properties: {
          type: {
            type: 'string',
            description: 'Type of matcher.',
            enum: ['all', 'literal'],
          },
          field: {
            type: 'string',
            description: 'Field for type matcher.',
            enum: ['to'],
          },
          value: {
            type: 'string',
            description: 'Value for matcher.',
          },
        },
        required: ['type'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { rule_identifier, ...body } = args as any;
  return client.emailRouting.rules.update(rule_identifier, body);
};

export default { metadata, tool, handler };
