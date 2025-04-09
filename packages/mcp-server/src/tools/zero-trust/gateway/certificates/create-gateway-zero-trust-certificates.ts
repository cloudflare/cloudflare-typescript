// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.certificates',
  operation: 'write',
  tags: [],
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
          'Number of days the generated certificate will be valid, minimum 1 day and maximum 30 years. Defaults to 5 years.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.gateway.certificates.create(body);
};

export default { metadata, tool, handler };
