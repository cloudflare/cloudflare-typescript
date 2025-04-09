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
  name: 'delete_gateway_zero_trust_certificates',
  description:
    'Deletes a gateway-managed Zero Trust certificate. A certificate must be deactivated from the edge (inactive) before it is deleted.',
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
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { certificate_id, ...body } = args;
  return client.zeroTrust.gateway.certificates.delete(certificate_id, body);
};

export default { metadata, tool, handler };
