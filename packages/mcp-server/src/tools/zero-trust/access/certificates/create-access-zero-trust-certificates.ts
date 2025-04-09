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
  name: 'create_access_zero_trust_certificates',
  description: 'Adds a new mTLS root certificate to Access.',
  inputSchema: {
    type: 'object',
    properties: {
      certificate: {
        type: 'string',
        description: 'The certificate content.',
      },
      name: {
        type: 'string',
        description: 'The name of the certificate.',
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
      associated_hostnames: {
        type: 'array',
        description: 'The hostnames of the applications that will use this certificate.',
        items: {
          type: 'string',
          description: 'A fully-qualified domain name (FQDN).',
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.access.certificates.create(body);
};

export default { metadata, tool, handler };
