// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'origin_tls_client_auth.hostnames.certificates',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_hostnames_origin_tls_client_auth_certificates',
  description:
    'Upload a certificate to be used for client authentication on a hostname. 10 hostname certificates per zone are allowed.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      certificate: {
        type: 'string',
        description: 'The hostname certificate.',
      },
      private_key: {
        type: 'string',
        description: "The hostname certificate's private key.",
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.originTLSClientAuth.hostnames.certificates.create(body);
};

export default { metadata, tool, handler };
