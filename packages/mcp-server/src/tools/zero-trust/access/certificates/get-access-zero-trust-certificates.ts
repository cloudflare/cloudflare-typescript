// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.certificates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/{accounts_or_zones}/{account_or_zone_id}/access/certificates/{certificate_id}',
};

export const tool: Tool = {
  name: 'get_access_zero_trust_certificates',
  description: 'Fetches a single mTLS certificate.',
  inputSchema: {
    type: 'object',
    properties: {
      certificate_id: {
        type: 'string',
        description: 'UUID.',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { certificate_id, ...body } = args as any;
  return client.zeroTrust.access.certificates.get(certificate_id, body);
};

export default { metadata, tool, handler };
