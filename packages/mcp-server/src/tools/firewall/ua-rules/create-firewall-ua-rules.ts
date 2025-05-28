// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'firewall.ua_rules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/zones/{zone_id}/firewall/ua_rules',
  operationId: 'user-agent-blocking-rules-create-a-user-agent-blocking-rule',
};

export const tool: Tool = {
  name: 'create_firewall_ua_rules',
  description: 'Creates a new User Agent Blocking rule in a zone.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Defines an identifier.',
      },
      configuration: {
        type: 'object',
        title: 'A user agent configuration.',
        properties: {
          target: {
            type: 'string',
            description:
              'The configuration target. You must set the target to `ua` when specifying a user agent in the rule.',
            enum: ['ua'],
          },
          value: {
            type: 'string',
            description: 'the user agent to exactly match',
          },
        },
        required: [],
      },
      mode: {
        type: 'string',
        description: 'The action to apply to a matched request.',
        enum: ['block', 'challenge', 'whitelist', 'js_challenge', 'managed_challenge'],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.firewall.uaRules.create(body);
};

export default { metadata, tool, handler };
