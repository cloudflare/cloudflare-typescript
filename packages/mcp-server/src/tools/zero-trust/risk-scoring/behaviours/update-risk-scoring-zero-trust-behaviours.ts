// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.risk_scoring.behaviours',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/accounts/{account_id}/zt_risk_scoring/behaviors',
  operationId: 'dlp-risk-score-behaviors-put',
};

export const tool: Tool = {
  name: 'update_risk_scoring_zero_trust_behaviours',
  description: 'Update configuration for risk behaviors',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      behaviors: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.zeroTrust.riskScoring.behaviours.update(body);
};

export default { metadata, tool, handler };
