// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ssl.certificate_packs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}',
  operationId: 'certificate-packs-delete-advanced-certificate-manager-certificate-pack',
};

export const tool: Tool = {
  name: 'delete_ssl_certificate_packs',
  description: 'For a given zone, delete an advanced certificate pack.',
  inputSchema: {
    type: 'object',
    properties: {
      zone_id: {
        type: 'string',
        description: 'Identifier.',
      },
      certificate_pack_id: {
        type: 'string',
        description: 'Identifier.',
      },
    },
  },
};

export const handler = (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { certificate_pack_id, ...body } = args as any;
  return client.ssl.certificatePacks.delete(certificate_pack_id, body);
};

export default { metadata, tool, handler };
