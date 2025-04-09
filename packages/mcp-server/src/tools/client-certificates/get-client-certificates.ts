// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'client_certificates',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_client_certificates',
  description: 'Get Details for a single mTLS API Shield Client Certificate',
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
  return client.clientCertificates.get(client_certificate_id, body);
};

export default { metadata, tool, handler };
