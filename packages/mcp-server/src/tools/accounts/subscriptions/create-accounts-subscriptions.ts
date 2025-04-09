// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'accounts.subscriptions',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_accounts_subscriptions',
  description: 'Creates an account subscription.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      frequency: {
        type: 'string',
        description: 'How often the subscription is renewed automatically.',
        enum: ['weekly', 'monthly', 'quarterly', 'yearly'],
      },
      rate_plan: {
        type: 'object',
        description: 'The rate plan applied to the subscription.',
        properties: {
          id: {
            type: 'string',
            description: 'The ID of the rate plan.',
            enum: [
              'free',
              'lite',
              'pro',
              'pro_plus',
              'business',
              'enterprise',
              'partners_free',
              'partners_pro',
              'partners_business',
              'partners_enterprise',
            ],
          },
          currency: {
            type: 'string',
            description: 'The currency applied to the rate plan subscription.',
          },
          externally_managed: {
            type: 'boolean',
            description: 'Whether this rate plan is managed externally from Cloudflare.',
          },
          is_contract: {
            type: 'boolean',
            description: 'Whether a rate plan is enterprise-based (or newly adopted term contract).',
          },
          public_name: {
            type: 'string',
            description: 'The full name of the rate plan.',
          },
          scope: {
            type: 'string',
            description: 'The scope that this rate plan applies to.',
          },
          sets: {
            type: 'array',
            description: 'The list of sets this rate plan applies to.',
            items: {
              type: 'string',
            },
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.accounts.subscriptions.create(body);
};

export default { metadata, tool, handler };
