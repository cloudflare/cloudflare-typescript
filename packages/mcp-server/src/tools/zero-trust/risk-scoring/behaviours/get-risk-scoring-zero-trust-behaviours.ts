// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.risk_scoring.behaviours',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/zt_risk_scoring/behaviors',
  operationId: 'dlp-risk-score-behaviors-get',
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

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.zeroTrust.riskScoring.behaviours.get(body);
};

export default { metadata, tool, handler };
