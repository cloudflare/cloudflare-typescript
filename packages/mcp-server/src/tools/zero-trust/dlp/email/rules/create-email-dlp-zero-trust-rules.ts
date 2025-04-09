// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.dlp.email.rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_email_dlp_zero_trust_rules',
  description: 'Create email scanner rule',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      action: {
        type: 'object',
        properties: {
          action: {
            type: 'string',
            enum: ['Block'],
          },
          message: {
            type: 'string',
          },
        },
        required: ['action'],
      },
      conditions: {
        type: 'array',
        description: 'Rule is triggered if all conditions match',
        items: {
          type: 'object',
          properties: {
            operator: {
              type: 'string',
              enum: ['InList', 'NotInList', 'MatchRegex', 'NotMatchRegex'],
            },
            selector: {
              type: 'string',
              enum: ['Recipients', 'Sender', 'DLPProfiles'],
            },
            value: {
              anyOf: [
                {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
                {
                  type: 'string',
                },
              ],
            },
          },
          required: ['operator', 'selector', 'value'],
        },
      },
      enabled: {
        type: 'boolean',
      },
      name: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.dlp.email.rules.create(body);
};

export default { metadata, tool, handler };
