// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ssl.certificate_packs',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'edit_ssl_certificate_packs',
  description:
    'For a given zone, restart validation or add cloudflare branding for an advanced certificate pack.  The former is only a validation operation for a Certificate Pack in a validation_timed_out status.',
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
      cloudflare_branding: {
        type: 'boolean',
        description:
          'Whether or not to add Cloudflare Branding for the order.  This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { certificate_pack_id, ...body } = args;
  return client.ssl.certificatePacks.edit(certificate_pack_id, body);
};

export default { metadata, tool, handler };
