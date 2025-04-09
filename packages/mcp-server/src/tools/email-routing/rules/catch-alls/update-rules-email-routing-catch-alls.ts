// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'email_routing.rules.catch_alls',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_rules_email_routing_catch_alls',
  description:
    'Enable or disable catch-all routing rule, or change action to forward to specific destination address.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      actions: {
        type: 'array',
        description: 'List actions for the catch-all routing rule.',
        items: {
          type: 'object',
          description: 'Action for the catch-all routing rule.',
          properties: {
            type: {
              type: 'string',
              description: 'Type of action for catch-all rule.',
              enum: ['drop', 'forward', 'worker'],
            },
            value: {
              type: 'array',
              items: {
                type: 'string',
                description: 'Input value for action.',
              },
            },
          },
          required: ['type'],
        },
      },
      matchers: {
        type: 'array',
        description: 'List of matchers for the catch-all routing rule.',
        items: {
          type: 'object',
          description: 'Matcher for catch-all routing rule.',
          properties: {
            type: {
              type: 'string',
              description: "Type of matcher. Default is 'all'.",
              enum: ['all'],
            },
          },
          required: ['type'],
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.emailRouting.rules.catchAlls.update(body);
};

export default { metadata, tool, handler };
