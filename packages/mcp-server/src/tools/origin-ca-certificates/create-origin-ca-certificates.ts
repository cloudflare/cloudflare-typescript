// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'origin_ca_certificates',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_origin_ca_certificates',
  description:
    'Create an Origin CA certificate. You can use an Origin CA Key as your User Service Key or an API token when calling this endpoint ([see above](#requests)).',
  inputSchema: {
    type: 'object',
    properties: {
      csr: {
        type: 'string',
        description: 'The Certificate Signing Request (CSR). Must be newline-encoded.',
      },
      hostnames: {
        type: 'array',
        description: 'Array of hostnames or wildcard names (e.g., *.example.com) bound to the certificate.',
        items: {
          type: 'string',
        },
      },
      request_type: {
        type: 'string',
        description:
          'Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa), or "keyless-certificate" (for Keyless SSL servers).',
        enum: ['origin-rsa', 'origin-ecc', 'keyless-certificate'],
      },
      requested_validity: {
        type: 'string',
        description: 'The number of days for which the certificate should be valid.',
        enum: [7, 30, 90, 365, 730, 1095, 5475],
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.originCACertificates.create(body);
};

export default { metadata, tool, handler };
