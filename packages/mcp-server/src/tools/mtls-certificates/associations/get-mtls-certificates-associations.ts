// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'mtls_certificates.associations',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_mtls_certificates_associations',
  description: 'Lists all active associations between the certificate and Cloudflare services.',
  inputSchema: {
    type: 'object',
    properties: {
      account_id: {
        type: 'string',
        description: 'Identifier',
      },
      mtls_certificate_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { mtls_certificate_id, ...body } = args;
  return client.mtlsCertificates.associations.get(mtls_certificate_id, body);
};

export default { metadata, tool, handler };
