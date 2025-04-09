// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'custom_certificates.prioritize',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_custom_certificates_prioritize',
  description:
    "If a zone has multiple SSL certificates, you can set the order in which they should be used during a request. The higher priority will break ties across overlapping 'legacy_custom' certificates.",
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier',
      },
      certificates: {
        type: 'array',
        description: 'Array of ordered certificates.',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Identifier',
            },
            priority: {
              type: 'number',
              description:
                "The order/priority in which the certificate will be used in a request. The higher priority will break ties across overlapping 'legacy_custom' certificates, but 'legacy_custom' certificates will always supercede 'sni_custom' certificates.",
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: Cloudflare, args: any) => {
  const { ...body } = args;
  return client.customCertificates.prioritize.update(body);
};

export default { metadata, tool, handler };
