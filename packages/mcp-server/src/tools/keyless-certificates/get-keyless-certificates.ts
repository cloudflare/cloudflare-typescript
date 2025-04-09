// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'keyless_certificates',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_keyless_certificates',
  description: 'Get details for one Keyless SSL configuration.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      keyless_certificate_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { keyless_certificate_id, ...body } = args;
  return client.keylessCertificates.get(keyless_certificate_id, body);
};

export default { metadata, tool, handler };
