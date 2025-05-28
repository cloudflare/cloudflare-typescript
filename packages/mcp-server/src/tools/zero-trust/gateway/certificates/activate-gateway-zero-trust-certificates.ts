// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.gateway.certificates',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/accounts/{account_id}/gateway/certificates/{certificate_id}/activate',
  operationId: 'zero-trust-certificates-activate-zero-trust-certificate',
};

export const tool: Tool = {
  name: 'activate_gateway_zero_trust_certificates',
  description: 'Binds a single Zero Trust certificate to the edge.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
      },
      certificate_id: {
        type: 'string',
        description: 'Certificate UUID tag.',
      },
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { certificate_id, ...body } = args as any;
  return client.zeroTrust.gateway.certificates.activate(certificate_id, body);
};

export default { metadata, tool, handler };
