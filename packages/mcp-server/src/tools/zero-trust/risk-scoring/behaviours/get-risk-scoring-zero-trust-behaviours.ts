// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.risk_scoring.behaviours',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_risk_scoring_zero_trust_behaviours',
  description: 'Get all behaviors and associated configuration',
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
  return client.zeroTrust.riskScoring.behaviours.get(body);
};

export default { metadata, tool, handler };
