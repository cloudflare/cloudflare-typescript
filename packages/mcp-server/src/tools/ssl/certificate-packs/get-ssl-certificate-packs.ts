// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'cloudflare-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Cloudflare from 'cloudflare';

export const metadata: Metadata = {
  resource: 'ssl.certificate_packs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}',
  operationId: 'certificate-packs-get-certificate-pack',
};

export const tool: Tool = {
  name: 'get_ssl_certificate_packs',
  description: 'For a given zone, get a certificate pack.',
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
    required: ['zone_id', 'certificate_pack_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Cloudflare, args: Record<string, unknown> | undefined) => {
  const { certificate_pack_id, ...body } = args as any;
  return asTextContentResult((await client.ssl.certificatePacks.get(certificate_pack_id, body)) as object);
};

export default { metadata, tool, handler };
