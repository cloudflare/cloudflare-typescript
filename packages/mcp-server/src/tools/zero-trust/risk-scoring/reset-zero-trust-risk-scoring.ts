// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.risk_scoring',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'reset_zero_trust_risk_scoring',
  description: 'Clear the risk score for a particular user',
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
  return client.zeroTrust.riskScoring.reset(user_id, body);
};

export default { metadata, tool, handler };
