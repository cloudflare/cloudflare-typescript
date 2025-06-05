// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.certificates',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/gateway/certificates',
  operationId: 'zero-trust-certificates-create-zero-trust-certificate',
};

export const tool: Tool = {
  name: 'create_gateway_zero_trust_certificates',
  description: 'Creates a new Zero Trust certificate.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      validity_period_days: {
        type: 'integer',
        description:
          'Number of days the generated certificate will be valid, minimum 1 day and maximum 30 years. Defaults to 5 years. In terraform, validity_period_days can only be used while creating a certificate, and this CAN NOT be used to extend the validity of an already generated certificate.',
      },
    },
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.zeroTrust.gateway.certificates.create(body));
};

export default { metadata, tool, handler };
