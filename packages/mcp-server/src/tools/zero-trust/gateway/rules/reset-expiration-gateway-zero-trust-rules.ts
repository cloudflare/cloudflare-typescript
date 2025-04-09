// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'reset_expiration_gateway_zero_trust_rules',
  description:
    'Resets the expiration of a Zero Trust Gateway Rule if its duration has elapsed and it has a default duration.\n\nThe Zero Trust Gateway Rule must have values for both `expiration.expires_at` and `expiration.duration`.\n',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      rule_id: {
        type: 'string',
        description: 'The API resource UUID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { rule_id, ...body } = args;
  return client.zeroTrust.gateway.rules.resetExpiration(rule_id, body);
};

export default { metadata, tool, handler };
