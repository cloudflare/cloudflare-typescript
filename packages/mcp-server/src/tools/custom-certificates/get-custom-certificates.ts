// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_certificates',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_custom_certificates',
  description: 'SSL Configuration Details',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      custom_certificate_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { custom_certificate_id, ...body } = args;
  return client.customCertificates.get(custom_certificate_id, body);
};

export default { metadata, tool, handler };
