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
  name: 'create_ssl_certificate_packs',
  description: 'For a given zone, order an advanced certificate pack.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      certificate_authority: {
        type: 'string',
        description:
          'Certificate Authority selected for the order.  For information on any certificate authority specific details or restrictions [see this page for more details.](https://developers.cloudflare.com/ssl/reference/certificate-authorities)',
        enum: ['google', 'lets_encrypt', 'ssl_com'],
      },
      hosts: {
        type: 'array',
        description:
          'Comma separated list of valid host names for the certificate packs. Must contain the zone apex, may not contain more than 50 hosts, and may not be empty.',
        items: {
          type: 'string',
        },
      },
      type: {
        type: 'string',
        description: 'Type of certificate pack.',
        enum: ['advanced'],
      },
      validation_method: {
        type: 'string',
        description: 'Validation Method selected for the order.',
        enum: ['txt', 'http', 'email'],
      },
      validity_days: {
        type: 'string',
        description: 'Validity Days selected for the order.',
        enum: [14, 30, 90, 365],
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
  const { ...body } = args;
  return client.ssl.certificatePacks.create(body);
};

export default { metadata, tool, handler };
