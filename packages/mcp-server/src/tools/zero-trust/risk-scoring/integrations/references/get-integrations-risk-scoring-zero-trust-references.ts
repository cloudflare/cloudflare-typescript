// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.risk_scoring.integrations.references',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/accounts/{account_id}/zt_risk_scoring/integrations/reference_id/{reference_id}',
  operationId: 'dlp-zt-risk-score-integration-get-by-reference-id',
};

export const tool: Tool = {
  name: 'get_integrations_risk_scoring_zero_trust_references',
  description: 'Get risk score integration by reference id.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      reference_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { reference_id, ...body } = args as any;
  return client.zeroTrust.riskScoring.integrations.references.get(reference_id, body);
};

export default { metadata, tool, handler };
