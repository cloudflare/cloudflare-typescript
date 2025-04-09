// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.risk_scoring.integrations',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_risk_scoring_zero_trust_integrations',
  description: 'Get risk score integration by id.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      integration_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { integration_id, ...body } = args;
  return client.zeroTrust.riskScoring.integrations.get(integration_id, body);
};

export default { metadata, tool, handler };
