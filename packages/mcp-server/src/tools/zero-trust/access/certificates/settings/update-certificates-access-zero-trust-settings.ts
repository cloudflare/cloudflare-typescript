// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'zero_trust.access.certificates.settings',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_certificates_access_zero_trust_settings',
  description: "Updates an mTLS certificate's hostname settings.",
  inputSchema: {
    type: 'object',
    properties: {
      settings: {
        type: 'array',
        items: {
          type: 'object',
          title: 'Hostname Settings',
          properties: {
            china_network: {
              type: 'boolean',
              description:
                'Request client certificates for this hostname in China. Can only be set to true if this zone is china network enabled.',
            },
            client_certificate_forwarding: {
              type: 'boolean',
              description:
                'Client Certificate Forwarding is a feature that takes the client cert provided by the eyeball to the edge, and forwards it to the origin as a HTTP header to allow logging on the origin.',
            },
            hostname: {
              type: 'string',
              description: 'The hostname that these settings apply to.',
            },
          },
          required: ['china_network', 'client_certificate_forwarding', 'hostname'],
        },
      },
      account_id: {
        type: 'string',
        description: 'The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.',
      },
      zone_id: {
        type: 'string',
        description: 'The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.zeroTrust.access.certificates.settings.update(body);
};

export default { metadata, tool, handler };
