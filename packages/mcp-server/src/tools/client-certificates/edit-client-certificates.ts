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
  name: 'edit_client_certificates',
  description:
    'If a API Shield mTLS Client Certificate is in a pending_revocation state, you may reactivate it with this endpoint.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      client_certificate_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { client_certificate_id, ...body } = args;
  return client.clientCertificates.edit(client_certificate_id, body);
};

export default { metadata, tool, handler };
