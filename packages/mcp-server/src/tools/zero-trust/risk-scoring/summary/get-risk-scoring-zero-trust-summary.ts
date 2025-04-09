// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.risk_scoring.summary',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_risk_scoring_zero_trust_summary',
  description: 'Get risk score info for all users in the account',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.riskScoring.summary.get(body);
};

export default { metadata, tool, handler };
