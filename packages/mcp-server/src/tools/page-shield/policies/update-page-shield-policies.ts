// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'page_shield.policies',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_page_shield_policies',
  description: 'Update a Page Shield policy by ID.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      policy_id: {
        type: 'string',
        description: 'Identifier',
      },
      action: {
        type: 'string',
        description: 'The action to take if the expression matches',
        enum: ['allow', 'log'],
      },
      description: {
        type: 'string',
        description: 'A description for the policy',
      },
      enabled: {
        type: 'boolean',
        description: 'Whether the policy is enabled',
      },
      expression: {
        type: 'string',
        description:
          'The expression which must match for the policy to be applied, using the Cloudflare Firewall rule expression syntax',
      },
      value: {
        type: 'string',
        description: 'The policy which will be applied',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { policy_id, ...body } = args;
  return client.pageShield.policies.update(policy_id, body);
};

export default { metadata, tool, handler };
