// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'mtls_certificates',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_mtls_certificates',
  description: 'Upload a certificate that you want to use with mTLS-enabled Cloudflare services.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      ca: {
        type: 'boolean',
        description: 'Indicates whether the certificate is a CA or leaf certificate.',
      },
      certificates: {
        type: 'string',
        description: 'The uploaded root CA certificate.',
      },
      name: {
        type: 'string',
        description: 'Optional unique name for the certificate. Only used for human readability.',
      },
      private_key: {
        type: 'string',
        description: 'The private key for the certificate',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.mtlsCertificates.create(body);
};

export default { metadata, tool, handler };
