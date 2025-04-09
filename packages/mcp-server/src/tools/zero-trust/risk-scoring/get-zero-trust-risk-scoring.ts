// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.risk_scoring',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_zero_trust_risk_scoring',
  description: 'Get risk event/score information for a specific user',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      user_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { user_id, ...body } = args;
  return client.zeroTrust.riskScoring.get(user_id, body);
};

export default { metadata, tool, handler };
