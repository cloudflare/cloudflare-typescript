// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'client_certificates',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_client_certificates',
  description: 'Create a new API Shield mTLS Client Certificate',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      csr: {
        type: 'string',
        description: 'The Certificate Signing Request (CSR). Must be newline-encoded.',
      },
      validity_days: {
        type: 'integer',
        description: 'The number of days the Client Certificate will be valid after the issued_on date',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.clientCertificates.create(body);
};

export default { metadata, tool, handler };
