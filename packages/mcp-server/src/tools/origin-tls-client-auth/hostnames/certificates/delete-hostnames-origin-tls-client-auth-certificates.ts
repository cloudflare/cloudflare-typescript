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
  name: 'delete_hostnames_origin_tls_client_auth_certificates',
  description: 'Delete Hostname Client Certificate',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      certificate_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { certificate_id, ...body } = args;
  return client.originTLSClientAuth.hostnames.certificates.delete(certificate_id, body);
};

export default { metadata, tool, handler };
