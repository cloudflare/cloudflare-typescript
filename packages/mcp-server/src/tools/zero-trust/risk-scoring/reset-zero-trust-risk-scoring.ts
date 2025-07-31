// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.risk_scoring',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/zt_risk_scoring/{user_id}/reset',
  operationId: 'dlp-risk-score-reset-post',
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
    required: ['account_id', 'user_id'],
  },
  annotations: {},
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { user_id, ...body } = args as any;
  return asTextContentResult((await client.zeroTrust.riskScoring.reset(user_id, body)) as object);
};

export default { metadata, tool, handler };
