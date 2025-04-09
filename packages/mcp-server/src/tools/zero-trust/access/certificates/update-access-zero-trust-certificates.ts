// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.certificates',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_access_zero_trust_certificates',
  description: 'Updates a configured mTLS certificate.',
  inputSchema: {
    type: 'object',
    properties: {
      certificate_id: {
        type: 'string',
        description: 'UUID.',
      },
      associated_hostnames: {
        type: 'array',
        description: 'The hostnames of the applications that will use this certificate.',
        items: {
          type: 'string',
          description: 'A fully-qualified domain name (FQDN).',
        },
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      name: {
        type: 'string',
        description: 'The name of the certificate.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { certificate_id, ...body } = args;
  return client.zeroTrust.access.certificates.update(certificate_id, body);
};

export default { metadata, tool, handler };
