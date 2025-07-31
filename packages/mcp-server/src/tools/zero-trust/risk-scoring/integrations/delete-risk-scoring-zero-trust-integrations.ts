// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.risk_scoring.integrations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}',
  operationId: 'dlp-zt-risk-score-integration-delete',
};

export const tool: Tool = {
  name: 'delete_risk_scoring_zero_trust_integrations',
  description: 'Delete a risk score integration.',
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
    required: ['account_id', 'integration_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { integration_id, ...body } = args as any;
  return asTextContentResult(
    (await client.zeroTrust.riskScoring.integrations.delete(integration_id, body)) as object,
  );
};

export default { metadata, tool, handler };
