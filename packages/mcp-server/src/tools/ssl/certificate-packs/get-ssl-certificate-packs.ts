// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ssl.certificate_packs',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_ssl_certificate_packs',
  description: 'For a given zone, get a certificate pack.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      certificate_pack_id: {
        type: 'string',
        description: 'Identifier',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { certificate_pack_id, ...body } = args;
  return client.ssl.certificatePacks.get(certificate_pack_id, body);
};

export default { metadata, tool, handler };
